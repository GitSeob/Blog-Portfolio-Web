import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { LOAD_ONE_POST_REQUEST } from '../reducers/posts';
import { useSelector } from 'react-redux';

const OnePost = ({ postData }) => {
	const [isAdmin, setIsAdmin] = useState(true);

	const Content = () => {
		return (<div dangerouslySetInnerHTML={{ __html: postData.content }} />);
	}
	return (
		<div className="post-category-list index-type-common index-type-horizontal">
			<ul className="post-list-horizontal">
				<li className="category-content-area">
					<div className="area-view-content">
						<div className="article-content">
							<div className="post-info-post">
								<a href="/blog" className="post-link-title">
									<div className="title-view">
										{postData.title}
									</div>
								</a>
								<div className="view-info-post">
									<a href="/blog" className="post-link-category">
										<span className="post-category">
											category
										</span>
									</a>
									<span className='post-date'>
										{postData.createdAt}
									</span>
								</div>
								{ isAdmin &&
									<div className="edit-post">
										<a href="/blog">
											수정
										</a>
										|
										<a href="/blog">
											삭제
										</a>
									</div>
								}
							</div>
							<div className="article-view">
								<Content />
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

const Post = ({ id }) => {
	const { postData, category_list } = useSelector(state=>state.posts);

	if (postData) {
		return (
			<OnePost postData={postData} category_list={category_list}/>
		);
	} else {
		return (
			<div>loading...</div>
		);
	}
};

Post.getInitialProps = async ( context ) =>{
	context.store.dispatch({
		type: LOAD_ONE_POST_REQUEST,
		data: context.query.id,
	})

	return { id: parseInt(context.query.id, 10)}
};

Post.propTypes = {

};

export default Post;
