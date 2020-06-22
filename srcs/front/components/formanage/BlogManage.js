import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Reorder, Add } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import { EDIT_CATEGORY_REQUEST, ADD_CATEGORY_REQUEST, REMOVE_CATEGORY_REQUEST } from '../../reducers/posts';

export const useSetInput = (initialValue = null) => {
	const [value, setter] = useState(initialValue);
	const handler = useCallback((e) => {
		setter(e.target.value);
	}, [])
	return [value, setter, handler];
}

const BlogManage = ({ category_list }) => {
	const [openAddCate, setOpenAddCate] = useState(false);
	const [addCateName, setAddCateName, OCAddCateName] = useSetInput('');
	const [editCateName, setEditCateName, OCEditCateName] = useSetInput('')
	const [cateIndex, setCateIndex] = useState(-1);

	const dispatch = useDispatch();

	const open_add_category = useCallback(() => {
		setOpenAddCate(true);
	}, []);
	const close_add_category = useCallback(() => {
		setOpenAddCate(false);
	}, []);

	const cancelAdd = useCallback((e) => {
		e.preventDefault();
		setAddCateName('');
		setOpenAddCate(false);
	}, [])

	const clickedEditBtn = useCallback((i, c) => (e) => {
		e.preventDefault();
		setEditCateName(c.name);
		setCateIndex(i);
	}, [])

	const clickedCancelEditBtn = useCallback((e) => {
		e.preventDefault();
		setCateIndex(-1);
	}, []);

	const submitEditCate = useCallback((i) => (e) => {
		e.preventDefault();
		if (confirm(`${category_list[i].name}를 ${editCateName}로 변경하겠습니까?`)){
			dispatch({
				type: EDIT_CATEGORY_REQUEST,
				data: {
					index: i+1,
					name: editCateName,
				}
			})
		}
	}, [editCateName]);

	const removeCate = useCallback((i) => (e) => {
		e.preventDefault();
		if (confirm(`${category_list[i].name} 카테고리를 삭제하시겠습니까?`)) {
			dispatch({
				type: REMOVE_CATEGORY_REQUEST,
				data: i+1
			});
		}
	})

	const submitAddCate = useCallback((e) => {
		e.preventDefault();
		if (confirm(`${addCateName} 이름으로 카테고리를 추가하시겠습니까?`)) {
			dispatch({
				type: ADD_CATEGORY_REQUEST,
				data: addCateName,
			})
		}
	}, [addCateName]);

	return (
		<>
		<form>
			<div className="">
				<h3>블로그 정보 관리</h3>
				<br />
				<div className="manage-content-wrap">
					hi
				</div>
			</div>
		</form>
		<div className="">
			<h3>카테고리 관리</h3>
			<br/>
			<div className="manage-content-wrap">
				<strong>이곳에서 블로그의 카테고리를 관리할 수 있습니다.</strong>
				<p>최대 20개까지 추가 가능합니다.</p>
				<div className="manage-wrap-order">
					<div className="manage-list-order">
						{category_list.map((c, i) => {
							return (
								<div key={(i)} className="manage-bundle-list" >
									<Reorder style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
									{ cateIndex === i ?
									<>
										<form className="add-cate-container">
											<input className="add-cate-ipt" type="text" value={editCateName} onChange={OCEditCateName} required/>
											<div className="manage-btn-container">
												<button type='reset' className="manage-cate-btn" onClick={clickedCancelEditBtn}>
													취소
												</button>
												<button className="manage-cate-btn" onClick={submitEditCate(i, c)}>
													수정
												</button>
											</div>
										</form>
									</>
									:
									<>
										{c.name}
										<div className="manage-btn-container">
											<button className="manage-cate-btn" onClick={clickedEditBtn(i, c)}>
												수정
											</button>
											<button className="manage-cate-btn" onClick={removeCate(i)}>
												삭제
											</button>
										</div>
									</>
									}
								</div>
							)
						})}
						{openAddCate &&
							<form className="manage-bundle-list add-cate-container">
								<input className="add-cate-ipt" type="text" value={addCateName} onChange={OCAddCateName} required/>
								<div className="manage-btn-container">
									<button type='reset' className="manage-cate-btn" onClick={cancelAdd}>
										취소
									</button>
									<button className="manage-cate-btn" onClick={submitAddCate}>
										추가
									</button>
								</div>
							</form>
						}
						<button className="manage-bundle-list" onClick={!openAddCate ? open_add_category : close_add_category}>
							< Add style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}} />카테고리 추가하기
						</button>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

BlogManage.propTypes = {

};

export default BlogManage;
