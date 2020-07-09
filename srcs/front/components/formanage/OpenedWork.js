import React, {useState, useCallback, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, batch } from 'react-redux';
import { Title, Category, History, People, Code, Description, InsertPhoto } from '@material-ui/icons';

import axios from 'axios';

import {useInput} from '../LoginForm';
import {useSetInput} from './BlogManage';
import { WORK_EDIT_REQUEST, WORK_DELETE_REQUEST } from '../../reducers/portfolio';

const OpenedWork = ({ idx }) => {
	const dispatch = useDispatch();
	const { data } = useSelector(state=>state.portfolio);
	const [imageWillChanged, setImageWillChanged] = useState('');

	const imageInput = useRef();

	const [editStatus, setEditStatus] = useState(false);

	const [titleValue, setTitleValue, OCTitleValue] = useSetInput(data.Works[idx].proj_name);
	const [categoryValue, setCategoryValue, OCCategoryValue] = useSetInput(data.Works[idx].category);
	const [periodValue, setPeriodValue, OCPeriodValue] = useSetInput(data.Works[idx].period);
	const [memberValue, setMemberValue] = useState(data.Works[idx].members);
	const [repoValue, setRepoValue, OCRepoValue] = useSetInput(data.Works[idx].repo);
	const [descriptionValue, setdescriptionValue, OCDescriptionValue] = useSetInput(data.Works[idx].description);

	const [memberIptError, setMemberIptError] = useState('');

	const [editRowStatus, setEditRowStatus] = useState(-1);
	const [tableValue, setTableValue] = useState(data.Works[idx].Work_rows);
	const [rowValue, setRowValue] = useState('');
	const [editedRowIndex, setEditedRowIndex] = useState([]);
	const [deletedRowIndex, setDeletedRowIndex] = useState([]);

	const [openAddRowStatus, setOpenAddRowStatus] = useState(false);
	const [editSomeThing, setEditSomeThing] = useState(false);

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
		setTitleValue(data.Works[idx].proj_name);
		setCategoryValue(data.Works[idx].category);
		setPeriodValue(data.Works[idx].period);
		setMemberValue(data.Works[idx].members);
		setRepoValue(data.Works[idx].repo);
		setdescriptionValue(data.Works[idx].description);
		setTableValue(data.Works[idx].Work_rows);
	}, [titleValue, categoryValue, periodValue, memberValue, repoValue, descriptionValue, tableValue])

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

	const deleteWork = useCallback((e) => {
		e.preventDefault();
		if (confirm(`정말 [ ${data.Works[idx].proj_name} ] 프로젝트를 삭제하시겠습니까?`)) {
			dispatch({
				type: WORK_DELETE_REQUEST,
				data: data.Works[idx].id,
			})
		}
	}, [])

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

	const submitForEdit = useCallback((e) => {
		e.preventDefault();
		if ((data.Works[idx].proj_name === titleValue) &&
			(data.Works[idx].category === categoryValue) &&
			(data.Works[idx].period === periodValue) &&
			(data.Works[idx].members === memberValue) &&
			(data.Works[idx].repo === repoValue) &&
			(data.Works[idx].description === descriptionValue) &&
			(imageWillChanged === '') &&
			(editedRowIndex.length === 0 || deletedRowIndex.length === 0 ) &&
			(!editSomeThing)) {
				alert('변경된 값이 없습니다.');
				return ;
		}
		if (confirm(`정말 [ ${data.Works[idx].proj_name} ] 프로젝트를 수정하시겠습니까?`)) {
			dispatch({
				type: WORK_EDIT_REQUEST,
				data: {
					id: data.Works[idx].id,
					proj_name: titleValue,
					category: categoryValue,
					period: periodValue,
					members: memberValue,
					repo: repoValue,
					description: descriptionValue,
					Work_rows: tableValue,
					imgSrc: imageWillChanged === '' ? data.Works[idx].imgSrc : imageWillChanged,
					editedRowIndex,
					deletedRowIndex,
				}
			})
		}
	}, [titleValue, categoryValue, periodValue, memberValue, repoValue, descriptionValue, imageWillChanged, editedRowIndex, deletedRowIndex, editSomeThing])

	const onEditRow = useCallback((i, c) => (e) => {
		e.preventDefault();
		setEditRowStatus(i);
		setRowValue(c);
	}, [editRowStatus, rowValue]);

	const deleteRow = useCallback((i, c) => (e) => {
		e.preventDefault();
		const tempTableValue = [...tableValue];
		tempTableValue.splice(i, 1);
		setDeletedRowIndex(c.id);
		setTableValue(tempTableValue);
		setEditSomeThing(true);
	}, [tableValue])

	const applyRow = useCallback((row, idx) => (e) => {
		// e.preventDefault();
		if (rowValue.row_name === row.row_name && rowValue.row_descript === row.row_descript && rowValue.row_content === row.row_content) {
			alert('변경된 값이 없습니다.');
			return ;
		}
		if (rowValue.row_name === '' || rowValue.row_descript === '' || rowValue.row_content === '') {
			alert('빈 값이 존재합니다.');
			return ;
		}
		const tempTableValue = [...tableValue];
		const tempEditedRowIndex = [...editedRowIndex];
		tempTableValue.splice(idx, 1, rowValue);
		if (row.id !== -1 && !tempEditedRowIndex.find(v => v === row.id)) {
			tempEditedRowIndex.push(row.id);
			setEditedRowIndex(tempEditedRowIndex);
		}
		setTableValue(tempTableValue);
		setEditSomeThing(true);
		setEditRowStatus(-1);
	}, [rowValue, tableValue, editedRowIndex, editRowStatus]);

	const cancelEditRow = useCallback((e) => {
		e.preventDefault();
		setEditSomeThing(false);
		resetAllValue();
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
			WorkId: data.Works[idx].id,
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
		setEditSomeThing(true);
	}, [rowValue, tableValue]);

	const onClickImageUpload = useCallback(() => {
		imageInput.current.click();
	}, [imageInput.current]);

	return (
		<>
		<article role="article" id={data.Works[idx].id} className="manage-work-view">
			<figure role="group" className="manage-work-container">
				<div className="manage-img-container">
					<img src={imageWillChanged !== '' ? imageWillChanged : data.Works[idx].imgSrc} className="manage-work-img" />
					{
						editStatus &&
						<div className="manage-img-btn">
							<button onClick={onClickImageUpload}>
								<InsertPhoto />
								<p>이미지 변경하기</p>
							</button>
							<input type="file" ref={imageInput} onChange={onChangeImg}/>
						</div>
					}
				</div>
				<figcaption className="manage-work-information">
					<div className="manage-blog-info">
						<Title style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							TITLE
						</span>
						{ !editStatus ?
							<span>
								{data.Works[idx].proj_name}
							</span>
							:
							<input value={titleValue} onChange={OCTitleValue} />
						}
					</div>
					<div className="manage-blog-info">
						<Category style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							CATEGORY
						</span>
						{ !editStatus ?
							<span>
								{data.Works[idx].category}
							</span>
							:
							<input value={categoryValue} onChange={OCCategoryValue} />
						}
					</div>
					<div className="manage-blog-info">
						<History style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							PERIOD
						</span>
						{ !editStatus ?
							<span>
								{data.Works[idx].period}
							</span>
							:
							<input value={periodValue} onChange={OCPeriodValue} />
						}
					</div>
					<div className="manage-blog-info">
						<People style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							MEMBER
						</span>
						{ !editStatus ?
							<span>
								{data.Works[idx].members}
							</span>
							:
							<>
							<input type="text" value={memberValue} onChange={OCMemberValue} />
							{memberIptError !== '' && <p style={{position: 'absolute', right: '10px', color: 'red'}}>{memberIptError}</p>}
							</>
						}
					</div>
					<div className="manage-blog-info">
						<Code style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
						<span className="manage-attr-name">
							REPO
						</span>
						{ !editStatus ?
							<span>
								{data.Works[idx].repo}
							</span>
							:
							<input value={repoValue} onChange={OCRepoValue} />
						}
					</div>
					<div className="manage-blog-info" style={{height: '100%'}}>
						<Description style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
						<span className="manage-attr-name">
							DESCRIPTION
						</span>
						{ !editStatus ?
							<span>
								{data.Works[idx].description}
							</span>
							:
							<textarea value={descriptionValue} onChange={OCDescriptionValue} />
						}
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
														<button onClick={deleteRow(i, c)}>
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
											<input value={rowValue.row_name} onChange={onChangeTableValue(1)}/>
										</td>
										<td data-th="col2">
											<input value={rowValue.row_descript} onChange={onChangeTableValue(2)}/>
										</td>
										<td data-th="col3">
										<div style={{position: 'relative'}}>
											<input value={rowValue.row_content} type="text" onChange={onChangeTableValue(3)}/>
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
					{openAddRowStatus &&
						<tr style={{border: "2px solid #DDD"}}>
							<td data-th="col1">
								<input value={rowValue.row_name} onChange={onChangeTableValue(1)}/>
							</td>
							<td data-th="col2">
								<input value={rowValue.row_descript} onChange={onChangeTableValue(2)}/>
							</td>
							<td data-th="col3" >
								<div style={{position: 'relative'}}>
									<input value={rowValue.row_content} onChange={onChangeTableValue(3)}/>
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
					{editStatus &&
						<tr>
							<td colSpan={3} style={{padding: 0}}>
								<button className="edit-table-add-btn" onClick={openAddRow}>
									table row add
								</button>
							</td>
						</tr>
					}
				</tbody>
			</table>
			<div className="manage-work-btn-container">
				{ !editStatus ?
					<>
						<button className="btn-edit" onClick={onEdit}>
							수정
						</button>
						<button className="btn-delete" onClick={deleteWork}>
							삭제
						</button>
					</>
					:
					<>
						<button className="btn-delete" onClick={offEdit}>
							취소
						</button>
						<button className="btn-edit" onClick={submitForEdit}>
							제출
						</button>
					</>
				}
			</div>
		</article>
		</>
	);
};

OpenedWork.propTypes = {

};

export default OpenedWork;
