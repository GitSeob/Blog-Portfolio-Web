import React from 'react';
import PropTypes from 'prop-types';

const OnePost = ({ postData }) => {
	const [isAdmin, setIsAdmin] = useState(true);
	return (
		<div className="post-category-list index-type-common index-type-horizontal">
			<ul className="post-list-horizontal">
				<li className="category-content-area">
					<div className="area-view-content">
						<div className="article-content">
							<div className="post-info-post">
								<a href="/blog" className="post-link-title">
									<div className="title-view">
										Title
									</div>
								</a>
								<div className="view-info-post">
									<a href="/blog" className="post-link-category">
										<span className="post-category">
											카테고리
										</span>
									</a>
									<span className='post-date'>
										2020. 01. 01. 00:00
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
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed orci luctus, tempor lacus et, tempor purus. Ut interdum turpis id scelerisque feugiat. Donec ultrices tortor non lectus porttitor commodo. Nullam non semper dolor. Nam semper eu erat id ornare. Sed gravida orci lorem, eget varius magna posuere nec. Maecenas dictum vulputate maximus. Proin in malesuada enim. Donec malesuada nibh lectus, ac rutrum arcu bibendum id. Suspendisse mollis est massa, vel tincidunt massa egestas sed. Nunc sit amet diam vitae felis dignissim feugiat. Ut ut iaculis tortor. Sed velit massa, egestas sed enim ac, mollis elementum nulla. Curabitur ullamcorper maximus eleifend. Mauris porttitor lectus sed ornare imperdiet. Sed fermentum a massa et tristique.</p>
								<p>&nbsp;</p>
								<p>Fusce mi lorem, suscipit id tincidunt vel, imperdiet id nisi. Nulla commodo tincidunt purus nec pellentesque. Phasellus pellentesque hendrerit eleifend. Etiam elementum velit eget tincidunt lobortis. Fusce lobortis risus nunc, rutrum congue arcu accumsan vel. Proin turpis elit, luctus a maximus malesuada, rutrum quis nulla. Nulla facilisi. Nam sit amet nisl et arcu ornare ultrices. Donec augue metus, eleifend ut enim ut, rhoncus laoreet purus. Mauris sed facilisis ante.</p>
								<p>&nbsp;</p>
								<p>Etiam tortor velit, pulvinar vitae felis sed, efficitur volutpat est. Nulla at iaculis magna. Etiam viverra lorem dolor, eget blandit urna congue a. Duis non ultrices massa, vitae rutrum mauris. Donec eget dictum purus. Curabitur in cursus lacus. Aenean egestas cursus odio quis tristique. Nunc finibus posuere rhoncus. Sed molestie mi a efficitur scelerisque. Aenean malesuada enim molestie finibus aliquam. Donec non pellentesque magna.</p>
								<p>&nbsp;</p>
								<p>Nunc bibendum libero quis ex convallis accumsan. Duis dignissim sit amet diam non lacinia. Aliquam erat volutpat. Morbi fermentum luctus molestie. Sed ac purus eros. Curabitur luctus ligula in tristique commodo. Nulla laoreet tellus tempor est sagittis sollicitudin in a sapien. Aliquam dapibus lorem quis egestas condimentum. Quisque sit amet sapien nec nibh interdum finibus non id libero. Morbi eget purus nec eros faucibus laoreet.</p>
								<p>&nbsp;</p>
								<p>Fusce eleifend ac ligula at iaculis. Etiam metus tortor, volutpat porttitor rutrum id, vulputate a est. Aenean interdum iaculis diam eget tempus. Donec et leo scelerisque metus fringilla feugiat. Fusce eleifend mi tortor, eget pulvinar nibh ullamcorper rutrum. Phasellus dictum nulla et vehicula tincidunt. Phasellus tincidunt rhoncus neque quis bibendum. In ut posuere diam, ut elementum velit.</p>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

const Post = props => {
	return (
		<OnePost />
	);
};

Post.getInitialProps = async (context) => {
	console.log('post getInitialProps', context.query.post_id);
	return { post_id: context.query.post_id };
};

Post.propTypes = {

};

export default Post;
