import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Category, History, People, Code, Description, InsertPhoto } from '@material-ui/icons';

import {useInput} from '../LoginForm';
import {useSetInput} from './BlogManage';

const OpenedWork = ({ works }) => {
	const dispatch = useDispatch();

	const [editStatus, setEditStatus] = useState(false);
	const [imgSrcValue, SetImgSrcValue] = useState(works.imgSrc);

	const [titleValue, setTitleValue, OCTitleValue] = useSetInput(works.proj_name);
	const [categoryValue, setCategoryValue, OCCategoryValue] = useSetInput(works.category);
	const [periodValue, setPeriodValue, OCPeriodValue] = useSetInput(works.period);
	const [memberValue, setMemberValue] = useState(works.members);
	const [repoValue, setRepoValue, OCRepoValue] = useSetInput(works.repo);
	const [descriptionValue, setdescriptionValue, OCDescriptionValue] = useSetInput(works.description);

	const [memberIptError, setMemberIptError] = useState('');

	const [editRowStatus, setEditRowStatus] = useState(-1);
	const [tableValue, setTableValue] = useState(works.Work_rows);
	const [rowValue, setRowValue] = useState('');

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
		setTitleValue(works.proj_name);
		setCategoryValue(works.category);
		setPeriodValue(works.period);
		setMemberValue(works.members);
		setRepoValue(works.repo);
		setdescriptionValue(works.description);
	}, [])

	const onEdit = useCallback((e) => {
		e.preventDefault();
		setEditStatus(true);
	})

	const offEdit = useCallback((e) => {
		e.preventDefault();
		setEditStatus(false);
		resetAllValue();
		// + 정보 날리기
	})

	const deleteWork = useCallback((e) => {
		e.preventDefault();
		if (confirm(`정말 [ ${works.proj_name} ] 프로젝트를 삭제하시겠습니까?`)) {
			console.log('delete');
		}
	})

	const submitForEdit = useCallback((e) => {
		e.preventDefault();
		if (confirm(`정말 [ ${works.proj_name} ] 프로젝트를 수정하시겠습니까?`)) {
			console.log('edit');
		}
	})

	const editRow = useCallback((i) => (e) => {
		e.preventDefault();
		setEditRowStatus(i);
	})

	const onChangeTableValue = useCallback((col) => (e) => {
		const tempArray = rowValue;
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
	})

	return (
		<article role="article" role="group" className="manage-work-view">
			<figure className="manage-work-container">
				<div className="manage-img-container">
					<img src={imgSrcValue} className="manage-work-img" />
					{
						editStatus &&
						<div className="manage-img-btn">
							<label for="input-file">
								<InsertPhoto />
								<p>이미지 변경하기</p>
							</label>
							<input id="input-file" type="file"/>
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
								{works.proj_name}
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
								{works.category}
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
								{works.period}
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
								{works.members}
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
								{works.repo}
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
								{works.description}
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
					{works.Work_rows.map((c, i) => {
						return (
							<>
							{editRowStatus !== i ?
								<>
									<tr key={(i)}>
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
														<button onClick={editRow(i)}>
															수정
														</button>
														<button>
															삭제
														</button>
													</div>
												}
											</div>
										</td>
									</tr>
								</>
							:
								<>
									<tr key={(i)}>
										<td data-th="col1">
											<input value={c.row_name} />
										</td>
										<td data-th="col2">
											<input value={c.row_descript} />
										</td>
										<td data-th="col3">
										<div style={{position: 'relative'}}>
											<input value={c.row_content} type="text" />
												{editStatus &&
													<div className="manage-row-btn-container">
														<button onClick={editRow(i)}>
															적용
														</button>
														<button>
															취소
														</button>
													</div>
												}
											</div>
										</td>
									</tr>
								</>
							}
							</>
						);
					})}
					{editStatus &&
						<tr>
							<td colSpan={3} style={{padding: 0}}>
								<button className="edit-table-add-btn">
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
	);
};

OpenedWork.propTypes = {

};

export default OpenedWork;
