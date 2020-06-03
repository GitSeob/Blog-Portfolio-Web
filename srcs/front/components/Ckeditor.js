import React, {useState, useEffect, useCallback} from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Router from 'next/router';

import {KeyboardArrowDown, Category} from '@material-ui/icons'
import {useInput} from '../pages/login';
import { useSelector, useDispatch } from 'react-redux';
import {ADD_POST_REQUEST} from '../reducers/posts';

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

const Ckeditor = ({ data="" }) => {
	const { category_list, isAddedPost, isAddingPost } = useSelector(state=>state.posts);
	const dispatch = useDispatch();

	const [ckval, OCV] = useState('<h1>hello ckeditor</h1>');
	const [postTitle, OCPT] = useInput('');
	const [category_index, setCategory] = useState(0);

	const onSubmitPost = useCallback((e) => {
		e.preventDefault();
		if (!postTitle) {
			alert('제목을 입력해주세요.');
			return ;
		}
		console.log({
			title: postTitle,
			category_index: category_index,
			content: ckval,
		})
		dispatch({
			type: ADD_POST_REQUEST,
			data: {
				title: postTitle,
				category_index: category_index,
				content: ckval,
				category: category_list[category_index],
				createdAt: '2020. 06. 03. 23:11',
			}
		})
	})

	useEffect(() => {
		if (isAddedPost) {
			alert("글이 등록되었습니다.")
			Router.push('/blog');
		}
	}, [isAddedPost])

	return (
		<div className="post-category-list index-type-common index-type-horizontal">
			<ul className="post-list-horizontal">
				<li className="category-content-area">
					<div className="area-view-content">
						<form className="article-content" onSubmit={onSubmitPost}>
							<SelectCate category_list={category_list} setCategory={setCategory}/>
							<input value={postTitle} onChange={OCPT} className=" post-title-ipt " placeholder="제목을 입력해주세요"/>
							<CKEditor
								editor={ClassicEditor}
								onInit={ editor=>{
									console.log(editor);
								}}
								data={ckval}
								onChange={(event, editor) =>{
									const data = editor.getData();
									OCV(data);
									// console.log( { event, editor, data } );
								}}
							/>
							<div className="submit-wrap">
								<input
									className="post-submit-btn"
									type="submit"
									name=""
									value="submit"
									disabled={isAddingPost}>
								</input>
							</div>
						</form>
					</div>
				</li>
			</ul>
		</div>
	);
};

Ckeditor.propTypes = {

};

export default Ckeditor;
