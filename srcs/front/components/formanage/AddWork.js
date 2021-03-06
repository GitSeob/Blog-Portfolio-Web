import React, {useState, useCallback, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { Title, Category, History, People, Code, Description, InsertPhoto, Create } from '@material-ui/icons';

import useSetInput from '../../hooks/useSetInput';
import { WORK_ADD_REQUEST } from '../../reducers/portfolio';

const AddWork = ({ close_add_work}) => {
	const dispatch = useDispatch();


	const imageInput = useRef();
	const [imageWillChanged, setImageWillChanged] = useState('');
	const [editStatus, setEditStatus] = useState(false);

	const [titleValue, setTitleValue, OCTitleValue] = useSetInput('');
	const [categoryValue, setCategoryValue, OCCategoryValue] = useSetInput('');
	const [contentValue, setContentValue, OCContentValue] = useSetInput('');
	const [periodValue, setPeriodValue, OCPeriodValue] = useSetInput('');
	const [memberValue, setMemberValue] = useState('');
	const [repoValue, setRepoValue, OCRepoValue] = useSetInput('');
	const [descriptionValue, setdescriptionValue, OCDescriptionValue] = useSetInput('');

	const [memberIptError, setMemberIptError] = useState('');

	const [editRowStatus, setEditRowStatus] = useState(-1);
	const [tableValue, setTableValue] = useState([]);
	const [rowValue, setRowValue] = useState('');

	const [openAddRowStatus, setOpenAddRowStatus] = useState(false);

	const OCMemberValue = useCallback((e) => {
		const re = /^[0-9\b]+$/;

		setMemberValue(e.target.value);
		if (e.target.value === '' || re.test(e.target.value)) {
			setMemberIptError('');
		} else {
			setMemberIptError('숫자만 입력 가능합니다.');
		}
	}, [memberValue])

	const resetAllValue = useCallback(() => {
		setTitleValue('');
		setCategoryValue('');
		setPeriodValue('');
		setMemberValue('');
		setRepoValue('');
		setdescriptionValue('');
		setContentValue('');
	}, [])

	const onEdit = useCallback((e) => {
		e.preventDefault();
		setEditStatus(true);
	}, [editStatus])

	const offEdit = useCallback((e) => {
		e.preventDefault();
		setEditStatus(false);
		resetAllValue();
		// + 정보 날리기
	}, [editStatus])

	const onChangeImg = useCallback((e) => {
		const imgFormData = new FormData();
		imgFormData.append('image', e.target.files[0]);
		axios.post('http://localhost:3065/api/portfolio/work/imgUpload', imgFormData, {
			withCredentials: true
		}).then(res => {
			setImageWillChanged(res.data.url);
		}).catch(e => {
			console.error(e);
			alert(`${e} 에러가 발생했습니다.`);
		})
	}, [dispatch, imageWillChanged]);

	const submitForAdd = useCallback((e) => {
		e.preventDefault();
		if (('' === titleValue) ||
			('' === categoryValue) ||
			('' === periodValue) ||
			('' === memberValue) ||
			('' === repoValue) ||
			('' === contentValue) ||
			('' === descriptionValue)) {
				alert('빈 값이 존재합니다.');
				return ;
		} else if (tableValue.length === 0) {
			alert('테이블 row를 최소 1개 입력해야합니다.');
			return ;
		}
		if (confirm(`프로젝트를 추가하시겠습니까?`)) {
			dispatch({
				type: WORK_ADD_REQUEST,
				data: {
					proj_name: titleValue,
					category: categoryValue,
					period: periodValue,
					content: contentValue,
					members: memberValue,
					repo: repoValue,
					description: descriptionValue,
					Work_rows: tableValue,
					imgSrc: imageWillChanged,
				}
			})
		}
	}, [titleValue, categoryValue, periodValue, memberValue, repoValue, descriptionValue, tableValue, contentValue])

	const onEditRow = useCallback((i, c) => (e) => {
		e.preventDefault();
		setEditRowStatus(i);
		setRowValue(c);
	}, [editRowStatus, rowValue]);

	const applyRow = useCallback((row, idx) => (e) => {
		if (rowValue.row_name === '' || rowValue.row_descript === '' || rowValue.row_content === '') {
			alert('빈 값이 존재합니다.');
			return ;
		}
		const tempTableValue = [...tableValue];
		tempTableValue.splice(idx, 1, rowValue);
		setTableValue(tempTableValue);
		setEditRowStatus(-1);
	}, [rowValue, tableValue, editRowStatus]);

	const cancelEditRow = useCallback((e) => {
		e.preventDefault();
		setEditRowStatus(-1);
	}, [editRowStatus])

	const onChangeTableValue = useCallback((col) => (e) => {
		let tempArray = {...rowValue};
		if (col === 1) {
			tempArray['row_name'] = e.target.value;
		}
		else if (col === 2) {
			tempArray['row_descript'] = e.target.value;
		}
		else if (col === 3) {
			tempArray['row_content'] = e.target.value;
		} else {
			return ;
		}
		setRowValue(tempArray);
	}, [rowValue]);

	const openAddRow = useCallback((e) => {
		e.preventDefault();
		setRowValue({
			row_name: '',
			row_descript: '',
			row_content: '',
		})
		setOpenAddRowStatus(true);
	}, [rowValue]);

	const closeAddRow = useCallback((e) => {
		e.preventDefault();
		setOpenAddRowStatus(false);
	}, [openAddRowStatus])

	const addNewRow = useCallback((e) => {
		e.preventDefault();
		if (rowValue.row_name === '' || rowValue.row_descript === '' || rowValue.row_content === '') {
			alert('빈 값이 존재합니다.');
			return ;
		}
		const addToTable = [...tableValue];
		addToTable.push(rowValue);
		setTableValue(addToTable);
		setOpenAddRowStatus(false);
	}, [rowValue, tableValue]);

	const onClickImageUpload = useCallback(() => {
		imageInput.current.click();
	}, [imageInput.current]);

	return (
		<>
		<article role="article" className="manage-work-view">
			<figure role="group" className="manage-work-container">
				<div className="manage-img-container">
					<img src={imageWillChanged !== '' ? imageWillChanged : 'http://localhost:3065/globalImg/noImg.png'} className="manage-work-img" />
					<div className="manage-img-btn">
						<button onClick={onClickImageUpload}>
							<InsertPhoto />
							<p>이미지 불러오기</p>
						</button>
						<input type="file" ref={imageInput} onChange={onChangeImg}/>
					</div>
				</div>
				<figcaption className="manage-work-information">
					<div className="manage-blog-info">
						<Title style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							TITLE
						</span>
						<input placeholder='프로젝트 이름을 입력하세요.' value={titleValue} onChange={OCTitleValue} />
					</div>
					<div className="manage-blog-info">
						<Category style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							CATEGORY
						</span>
						<input placeholder='프로젝트 카테고리를 입력하세요.' value={categoryValue} onChange={OCCategoryValue} />
					</div>
					<div className="manage-blog-info">
						<History style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							PERIOD
						</span>
						<input placeholder='프로젝트 기간을 입력하세요.' value={periodValue} onChange={OCPeriodValue} />
					</div>
					<div className="manage-blog-info">
						<Create style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							CONTENT
						</span>
						<input placeholder='프로젝트 콘텐츠를 입력하세요.' value={contentValue} onChange={OCContentValue} />
					</div>
					<div className="manage-blog-info">
						<People style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							MEMBER
						</span>
						<input placeholder='프로젝트 인원을 입력하세요.' type="text" value={memberValue} onChange={OCMemberValue} />
						{memberIptError !== '' && <p style={{position: 'absolute', right: '10px', color: 'red'}}>{memberIptError}</p>}
					</div>
					<div className="manage-blog-info">
						<Code style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							REPO
						</span>
						<input placeholder='프로젝트 repo URL을 입력하세요.' value={repoValue} onChange={OCRepoValue} />
					</div>
					<div className="manage-blog-info" style={{height: '100%'}}>
						<Description style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
						<span className="manage-attr-name">
							DESCRIPTION
						</span>
						<textarea placeholder='프로젝트 Description을 입력하세요.' value={descriptionValue} onChange={OCDescriptionValue} />
					</div>
				</figcaption>
			</figure>
			<table style={{height: "100%",}} className="gallery-table">
				<thead>
					<tr>
						<th className="gallery-table-col col1">
							OBJECT
						</th>
						<th className="gallery-table-col col2">
							OBJECT's DESCRIPTION
						</th>
						<th className="gallery-table-col col3">
							OBJECT's CONTENT
						</th>
					</tr>
				</thead>
				<tbody>
					{tableValue.map((c, i) => {
						return (
							<tr key={(i)}>
							{editRowStatus !== i ?
								<>
										<td data-th="col1">
											{c.row_name}
										</td>
										<td data-th="col2">
											{c.row_descript}
										</td>
										<td data-th="col3">
											<div style={{position: 'relative'}}>
												{c.row_content}
												{editStatus &&
													<div className="manage-row-btn-container">
														<button onClick={onEditRow(i, c)}>
															수정
														</button>
														<button>
															삭제
														</button>
													</div>
												}
											</div>
										</td>
								</>
							:
								<>
										<td data-th="col1">
											<input placeholder='row name' value={rowValue.row_name} onChange={onChangeTableValue(1)}/>
										</td>
										<td data-th="col2">
											<input placeholder='row description' value={rowValue.row_descript} onChange={onChangeTableValue(2)}/>
										</td>
										<td data-th="col3">
										<div style={{position: 'relative'}}>
											<input placeholder='row content' value={rowValue.row_content} type="text" onChange={onChangeTableValue(3)}/>
												{editStatus &&
													<div className="manage-row-btn-container on-edit">
														<button onClick={applyRow(c, i)}>
															적용
														</button>
														<button onClick={cancelEditRow}>
															취소
														</button>
													</div>
												}
											</div>
										</td>
									</>
							}
							</tr>
						);
					})}
					{ openAddRowStatus &&
					<tr style={{border: "2px solid #DDD"}}>
						<td data-th="col1">
							<input placeholder='row name' value={rowValue.row_name} onChange={onChangeTableValue(1)}/>
						</td>
						<td data-th="col2">
							<input placeholder='row description' value={rowValue.row_descript} onChange={onChangeTableValue(2)}/>
						</td>
						<td data-th="col3" >
							<div style={{position: 'relative'}}>
								<input placeholder='row content' value={rowValue.row_content} onChange={onChangeTableValue(3)}/>
								<div className="manage-row-btn-container on-edit">
									<button onClick={addNewRow}>
										추가
									</button>
									<button onClick={closeAddRow}>
										취소
									</button>
								</div>
							</div>
						</td>
					</tr>
					}
					<tr>
						<td colSpan={3} style={{padding: 0}}>
							<button className="edit-table-add-btn" onClick={openAddRow}>
								table row add
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<div className="manage-work-btn-container">
				<button className="btn-delete" onClick={close_add_work}>
					취소
				</button>
				<button className="btn-edit" onClick={submitForAdd}>
					제출
				</button>
			</div>
		</article>
		</>
	);
};

AddWork.propTypes = {

};

export default AddWork;
