import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Reorder, Add, Title, Description, Grade, KeyboardArrowDown } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import { EDIT_CATEGORY_REQUEST, ADD_CATEGORY_REQUEST, REMOVE_CATEGORY_REQUEST, EDIT_POST_MANAGE_REQUEST, REMOVE_POST_REQUEST, LOAD_CATEGORY_POSTS_REQUEST, LOAD_MAIN_POSTS_REQUEST, REMOVE_SELECTED_POST_REQUEST } from '../../reducers/posts';

export const useSetInput = (initialValue = null) => {
	const [value, setter] = useState(initialValue);
	const handler = useCallback((e) => {
		setter(e.target.value);
	}, [])
	return [value, setter, handler];
}

const SelectCate = ({category_list}) => {
	const [isClicked, setClick] = useState(false);
	const [cateName, setCateName] = useState('카테고리별 포스트');
	const dispatch = useDispatch();

	const cateOpen = {
		display: `${isClicked ? 'block' : 'none'}`,
	}
	const allowTurn = {
		transform: `translateY(-50%) rotate(${!isClicked ? 0 : 180}deg)`
	}
	const isOpen = () => {
		if (isClicked) {
			setClick(false);
		} else {
			setClick(true);
		}
	}
	const onChangeCate = useCallback(c =>(e) => {
		e.preventDefault();
		if (c === '전체') {
			setCateName('전체 게시물');
			dispatch({
				type: LOAD_MAIN_POSTS_REQUEST,
			})
		} else {
			setCateName(c.name);
			dispatch({
				type: LOAD_CATEGORY_POSTS_REQUEST,
				data: c.name,
			})
		}
		setClick(false);
	});

	return (
		<div className="cateSelect-ipt" role="button">
			<div className="cs-ipt-btn" role="button">
				<button type="button" className="cs-btn" onClick={isOpen}>
					<span className="cs-text"> {cateName} </span>
					<span className="cs-icon" style={allowTurn}>
						<KeyboardArrowDown />
					</span>
				</button>
				<div className="cs-list-wrap" style={cateOpen}>
					<div className="cs-list-container">
						<button className="cs-list-attr" onClick={onChangeCate('전체')}>
							<div className="cs-list-attr-text">
								전체 게시물
							</div>
						</button>
						{category_list.map((c, i) => {
							return (
								<button key={(i)} className="cs-list-attr" onClick={onChangeCate(c)}>
									<div className="cs-list-attr-text">
										{c.name}
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

const ChangeCate = ({category_list}) => {
	const [isClicked, setClick] = useState(false);

	const cateOpen = {
		display: `${isClicked ? 'block' : 'none'}`,
	}
	const allowTurn = {
		transform: `translateY(-50%) rotate(${!isClicked ? 0 : 180}deg)`
	}
	const isOpen = () => {
		if (isClicked) {
			setClick(false);
		} else {
			setClick(true);
		}
	}
	const onChangeCate = useCallback(i =>(e) => {
		e.preventDefault();
		console.log(i);
	}, []);

	return (
		<div className="cateSelect-ipt" role="button">
			<div className="cs-ipt-btn" role="button">
				<button type="button" className="cs-change-btn" onClick={isOpen}>
					<i className="cs-text" style={{marginTop: 'px'}}> 변경 </i>
					<span className="cs-icon" style={allowTurn}>
						<KeyboardArrowDown />
					</span>
				</button>
				<div className="cs-list-wrap" style={cateOpen}>
					<div className="cs-list-container cs-change-category">
						{category_list.map((c, i) => {
							return (
								<button key={(i)} className="cs-list-attr" onClick={onChangeCate(i)}>
									<div key={(i)} className="cs-list-attr-text">
										{c.name}
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

const BlogManage = ({ category_list, mainPosts }) => {
	const [openAddCate, setOpenAddCate] = useState(false);
	const [isChanged, setChanged] = useState(false);
	const [addCateName, setAddCateName, OCAddCateName] = useSetInput('');
	const [editCateName, setEditCateName, OCEditCateName] = useSetInput('')
	const [cateIndex, setCateIndex] = useState(-1);
	const [descriptionValue, setDesValue, OCDesValue] = useSetInput('');
	const [blogTitleValue, setBlogTitleValue, OCBlogTitleValue] = useSetInput('');
	const [checkEachPost, setCheckEachPost] = useState(Array(mainPosts.length).fill(false));
	const [checkedPostsId, setCheckedPostsId] = useState([]);
	const [checkAllPosts, setCheckAllPosts] = useState(false);

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

	const onEditPost = useCallback((c) => (e) => {
		e.preventDefault();
		dispatch({
			type: EDIT_POST_MANAGE_REQUEST,
			data: c.id,
		})
	}, []);

	const onRemovePost = useCallback((c) => (e) => {
		e.preventDefault();
		if (confirm(`" ${c.title} "게시물을 삭제하시겠습니까?`)){
			dispatch({
				type: REMOVE_POST_REQUEST,
				data: c.id,
			})
		}
	}, []);

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

	const selectPost = useCallback((i, c) => (e) => {
		setCheckEachPost(checkEachPost.map((elem, idx) => {
			if (idx === i) {
				return e.target.checked;
			} else {
				return elem;
			}
		}))
		if (e.target.checked) {
			setCheckedPostsId([...checkedPostsId, c.id]);
		} else {
			setCheckedPostsId(checkedPostsId.filter(v => v !== c.id));
		}
	})

	const selectAllPost = useCallback((e) => {
		setCheckAllPosts(e.target.checked);
		if (e.target.checked) {
			let tempArray = new Array();
			mainPosts.map((c) => {
				tempArray.push(c.id);
			})
			setCheckedPostsId(tempArray);
			setCheckEachPost(Array(mainPosts.length).fill(true))
		} else {
			setCheckedPostsId([]);
			setCheckEachPost(Array(mainPosts.length).fill(false))
		}
	});

	const removeSelectedPosts = useCallback((e) => {
		e.preventDefault();
		if (confirm(`선택한 ${checkedPostsId.length}개 게시물을 삭제하시겠습니까?`)) {
			dispatch({
				type: REMOVE_SELECTED_POST_REQUEST,
				data: checkedPostsId,
			})
		}
	})

	return (
		<>
		<form>
			<div className="manage-attr-wrap">
				<h3>블로그 정보 관리</h3>
				<br />
				<div className="manage-content-wrap">
					<strong>이곳에서 블로그 정보를 관리할 수 있습니다.</strong>
					<p>블로그 타이틀과 Favicon을 수정할 수 있습니다.</p>
					<div className="manage-wrap-order">
						<div className="manage-list-order">
							<div className="manage-blog-info">
								<Title style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
								<div className="manage-attr-name">
									TITLE
								</div>
								<input type='text' value={blogTitleValue} onChange={OCBlogTitleValue} required placeholder="이곳에 블로그 타이틀을 작성해주세요." className="manage-attr-content" />
							</div>
							<div className="manage-blog-info favicon-edit-wrap">
								<Grade style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
								<div className="manage-attr-name">
									FAVICON
								</div>
								<div className="manage-attr-content">
									<img src="./images/favicon.ico"/>
									<div className="filebox">
										<label htmlFor="ex_file">변경</label>
										<input type="file" id="ex_file" />
									</div>
								</div>
							</div>
							<div className="manage-blog-info">
								<Description style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
								<div className="manage-attr-name">
									DESCRIPTION
								</div>
								<input type="text" value={descriptionValue} onChange={OCDesValue} placeholder="Description을 작성해주십시오." className="manage-attr-content" />
							</div>
						</div>
					</div>
					<div className="set_btn">
						{ isChanged ?
							<button type="button" className="btn_save">
								변경사항 저장
							</button>
							:
							<button disabled className="btn_not_allow">
								변경사항 저장
							</button>
						}
					</div>
				</div>
			</div>
		</form>
		<div className="manage-attr-wrap">
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
		<div className="manage-attr-wrap">
			<h3>포스트 관리</h3>
			<br/>
			<div className="manage-content-wrap">
				<strong>이곳에서 게시물들을 관리할 수 있습니다.</strong>
				<p>게시물을 수정하거나 삭제를 할 수 있습니다.</p>
				<div className="post-selected-edit manage-wrap-order">
					<div className="post-selected-header">
						<input type="checkbox" name="all_post" checked={checkAllPosts} onChange={selectAllPost} className="manage-post-checkbox"/>
						<SelectCate category_list={category_list}/>
						<div className="manage-btn-container">
							<ChangeCate category_list={category_list}/>
							<button className="manage-cate-btn" onClick={removeSelectedPosts}>
								삭제
							</button>
						</div>
					</div>
				</div>
				<div className="manage-wrap-order">
					<div className="manage-list-order">
						{mainPosts.map((c, i) => {
							return (
								<div key={(c.id)} className="manage-bundle-list">
									<input type="checkbox" onChange={selectPost(i, c)} checked={checkEachPost[i]} name="one_post" className="manage-post-checkbox"/>
									<div className="manage-post-list-wrap">
										<h4>{c.title}</h4>
										<div>
											<span className="text-category">{c.Category.name}</span>
											<span className="text-info">공개</span>
											<span className="text-info">{c.createdAt}</span>
										</div>
										<div className="manage-btn-container">
											<button className="manage-cate-btn" onClick={onEditPost(c)}>
												수정
											</button>
											<button className="manage-cate-btn" onClick={onRemovePost(c)}>
												삭제
											</button>
										</div>
									</div>
								</div>
							);
						})}
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
