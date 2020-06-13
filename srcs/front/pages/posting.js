import React, {useState, useEffect, useCallback, useRef} from 'react';
import Router from 'next/router';

import {KeyboardArrowDown} from '@material-ui/icons'
import {useInput} from '../pages/login';
import { useSelector, useDispatch } from 'react-redux';
import {ADD_POST_REQUEST} from '../reducers/posts';
import dynamic from 'next/dynamic';

const Editor = dynamic(import ('../components/Toast'), {
	ssr: false
})

const SelectCate = ({category_list, setCategory}) => {
	const [isClicked, setClick] = useState(false);
	const [cate_name, setCateName] = useState('카테고리');

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
		setCateName(category_list[i]);
		setClick(false);
	}, []);

	return (
		<div className="cateSelect-ipt" role="button">
			<div className="cs-ipt-btn" role="button">
				<button type="button" className="cs-btn" onClick={isOpen}>
					<i className="cs-text"> {cate_name} </i>
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
										{c}
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

const Posting = () => {
	const { category_list, isAddedPost, isAddingPost } = useSelector(state=>state.posts);
	const dispatch = useDispatch();

	const [editorValue, OCV] = useState('');
	const [postTitle, OCPT] = useInput('');
	const [category_index, setCategory] = useState(0);

	const defaultSubmit = useCallback((e) => {
		e.preventDefault();
	})
	const onSubmitPost = useCallback((e) => {
		e.preventDefault();
		if (!postTitle) {
				alert('제목을 입력해주세요.');
		} else {
			console.log(editorValue);
			dispatch({
				type: ADD_POST_REQUEST,
				data: {
					title: postTitle,
					category_index: category_index,
					content: editorValue,
					category: category_index,
				}
			})
		}
	})

	useEffect(() => {
		if (isAddedPost) {
			alert("글이 등록되었습니다.");
			Router.push('/');
		}
	}, [isAddedPost])

	return (
		<div className="post-category-list index-type-common index-type-horizontal posting-wrap">
			<div className="area-view-content posting-container">
				<form className="article-content posting-wrap" onSubmit={defaultSubmit}>
					<SelectCate category_list={category_list} setCategory={setCategory}/>
					<input value={postTitle} onChange={OCPT} className=" post-title-ipt " placeholder="제목을 입력해주세요"/>
					<Editor
						editorValue={editorValue}
						OCV={OCV}
					/>
					<div className="submit-wrap">
						<input
							className="post-submit-btn"
							type="submit"
							name="posting"
							value="posting"
							disabled={isAddingPost}
							onClick={onSubmitPost}>
						</input>
					</div>
				</form>
			</div>
		</div>
	);
};

// post_id query를 받으면 어떤 게시물을 수정하는 상태
// 따라서, 해당 게시물의 데이터를 받아서 props로 전탈해주고 각 Input창에 value 값으로 줘야함
// post_id 없이 단순히 posting 페이지로 라우팅 되었다면 새로운 글을 작성하는 것
// index는 음이 아닌 정수로 이루어져 있으므로 -1을 props로 전달한다.
// 따라서, post_id === -1 이면 새로운 게시글을 작성하는 것

Posting.getinitialProps = async (context) => {
	console.log('posting getinitialProps', context.query.post_id);
	const post_id = !context.query.post_id ? -1 : context.query.post_id;
	return { post_id: post_id};
}

Posting.propTypes = {

};

export default Posting;
