import React, {useState, useEffect, useCallback, useRef} from 'react';
import Router from 'next/router';

import {KeyboardArrowDown, Close} from '@material-ui/icons'
import {useInput} from '../components/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import {ADD_POST_REQUEST, EDIT_POST_REQUEST, CLOSE_POSTING} from '../reducers/posts';
import dynamic from 'next/dynamic';
import { CarrotSvg } from '../containers/Door';

const Editor = dynamic(import ('../components/Toast'), {
	ssr: false
})

const SelectCate = ({category_list, setCategory, category_index}) => {
	const [isClicked, setClick] = useState(false);
	// const [cate_name, setCateName] = useState(category_list[category_index].name ? category_list[category_index].name : '카테고리 없음');

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
		setCategory(i);
		// setCateName(category_list[i].name);
		setClick(false);
	}, []);

	return (
		<div className="cateSelect-ipt" role="button">
			<div className="cs-ipt-btn" role="button">
				<button type="button" className="cs-btn" onClick={isOpen}>
					<i className="cs-text"> {category_list[category_index].name} </i>
					<span className="cs-icon" style={allowTurn}>
						<KeyboardArrowDown />
					</span>
				</button>
				<div className="cs-list-wrap" style={cateOpen}>
					<div className="cs-list-container">
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

const Posting = ({category_list}) => {
	const { isAddedPost, isAddingPost, isEdittingPost, isEditedPost, postEditMode, postData } = useSelector(state=>state.posts);
	const { admin } = useSelector(state=>state.admin);
	const dispatch = useDispatch();

	const targetPost = (postEditMode && postData) ? postData : null;

	const closeWindow = useCallback(() => {
		dispatch({
			type: CLOSE_POSTING,
		})
	}, [])

	if (!admin) {
		alert('로그인 후 작성하실 수 있습니다.');
	}

	const [editorValue, OCV] = useState(targetPost ? targetPost.content : '');
	const [postTitle, OCPT] = useInput(targetPost ? targetPost.title : '');
	const [category_index, setCategory] = useState(targetPost ?  category_list.findIndex(v=>v.id === targetPost.CategoryId) : 0);

	const defaultSubmit = useCallback((e) => {
		e.preventDefault();
	})
	const onSubmitPost = useCallback((e) => {
		e.preventDefault();
		if (!postTitle) {
			alert('제목을 입력해주세요.');
		} else if (!editorValue) {
			alert('본문을 작성해주세요.')
		} else {
			if (confirm('글을 작성하시겠습니까 ?')) {
				dispatch({
					type: ADD_POST_REQUEST,
					data: {
						title: postTitle,
						content: editorValue,
						category_id: category_list[category_index].id,
					}
				})
			}
		}
	})

	const onEditPost = useCallback((e) => {
		e.preventDefault();
		if (!postTitle) {
			alert('제목을 입력해주세요.');
		} else if (!editorValue) {
			alert('본문을 작성해주세요.')
		} else {
			if (confirm('글을 수정하시겠습니까 ?')) {
				dispatch({
					type: EDIT_POST_REQUEST,
					data: {
						id: postData.id,
						title: postTitle,
						content: editorValue,
						category_id: category_list[category_index].id,
					}
				})
			}
		}
	})

	useEffect(() => {
		if (isAddedPost) {
			alert("글이 등록되었습니다.");
			dispatch({
				type: CLOSE_POSTING,
			})
			Router.push('/');
		}
		if (isEditedPost) {
			alert("글이 수정되었습니다.");
			closeWindow();
		}
	}, [isAddedPost, isEditedPost])

	const submiting = {
		zIndex: `${(isAddingPost || isEdittingPost ) ? 299 : 301}`
	}

	return (
		<>
		<div className="posting-background">
			<CarrotSvg iconWidth="100" iconHeight="100" classname="App-logo" />
			<div style={submiting} className="post-category-list index-type-common index-type-horizontal posting-wrapper">
				<div className="area-view-content posting-container">
					<form className="article-content posting-wrap" onSubmit={defaultSubmit}>
						{ category_list !== [] && <SelectCate category_list={category_list} category_index={category_index} setCategory={setCategory}/> }
						<input value={postTitle} onChange={OCPT} className=" post-title-ipt " placeholder="제목을 입력해주세요"/>
						<Editor
							editorValue={editorValue}
							OCV={OCV}
						/>
						<div className="submit-wrap">
							<button
								className="posting-close-btn"
								onClick={closeWindow}>
								Close
							</button>
							<input
								className="post-submit-btn"
								type="submit"
								name={postEditMode ? "Edit" : "posting"}
								value={postEditMode ? "Edit" : "posting"}
								disabled={isAddingPost || isEdittingPost}
								onClick={targetPost ? onEditPost : onSubmitPost}>
							</input>
						</div>
					</form>
				</div>
			</div>
		</div>
		</>
	);
};

Posting.propTypes = {

};

export default Posting;
