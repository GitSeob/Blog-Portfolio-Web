import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import {Close, Menu, Search, Edit} from '@material-ui/icons'

const MenuBar = () => {
	const dummy_list = ['test1', 'test2', 'test3', 'test4']
	return (
		<div className="area-menu">
			<nav className="menu-navigation">
				<ul className="list-gnb">
					<li className="t_menu">
						<a href="/" className="link-gnb link-lnb">
							홈
						</a>
					</li>
					<li className="t_menu">
						<a href="/" className="link-gnb link-lnb">
							방명록
						</a>
					</li>
				</ul>
				<ul className="tt-category">
				{
					dummy_list.map((c, i) => {
						return (
							<li key={(i)} className="">
								<a href="/" className="link-item link-gnb link-lnb">
									{c}
								</a>
							</li>
						);
					})
				}
				</ul>
			</nav>
		</div>
	);
}

const MainHeader = () => {
	return (
		<header id="post-header">
			<div className="inner-header">
				<h1 className="post-logo">
					<a href="/blog" title="title" className="post-link-logo">
						<span className="blind">
							title
						</span>
						<span className="post-title-text">
							title
						</span>
					</a>
				</h1>
				<button type="button" className="post-btn-menu">
					<span className="post-icon-menu">
						<Menu />
					</span>
					<span className="post-icon-close">
						<Close />
					</span>
					<span className="blind">

					</span>
				</button>
				<button className="post-btn-search">
					<span className="post-icon-search">
						<Search />
					</span>
					<span className="blind">

					</span>
				</button>
				<div className="post-area-search thema-apply" style={{}}>
					<form action method="get">
						<input type="text" name="search" title="Search" placeholder="Search" className="post-inp-search"/>
					</form>
				</div>
			</div>
		</header>
	);
}

const PostList = () => {
	const dummy_list = ['test1', 'test2', 'test3', 'test4']
	return (
		<>
		<div className="post-category-list index-type-common index-type-horizontal">
			<h2 className="post-title-category">
				test category title
			</h2>
		</div>
		<div className="post-category-list index-type-common index-type-horizontal">
			<ul className="post-list-horizontal">
			{
				dummy_list.map((c, i) => {
					return (
						<li key={(i)} className="list-horizontal-item">
							<div className="article-content">
								<div className="thumbnail-zone">
									<a href="/" className="thumbnail-post" style={{
										backgroundImage: 'url(\'./images/profileImage.jpg\')',
									}}></a>
								</div>
								<div className="post-box-content">
									<a 	href="/" className="post-link-title">
										<strong className="post-title-post">
											{c}
										</strong>
									</a>
									<div className="post-info-post">
										<a className="post-link-category">
											<span className="post-category">
												category name
											</span>
										</a>
										<div className="post-date">
											2020. 01. 01. 00:00
										</div>
									</div>
									<a href="/" classname="post-link-article">
										<p className="post-txt-post">
										Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
										</p>
									</a>
								</div>
							</div>
						</li>
						);
					})
				}
			</ul>
		</div>
		<a href="/blog" className="posting-btn">
			<Edit />
		</a>
		</>
	);
}

const OnePost = () => {
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

const PostMain = () => {
	const [allPost, setAP] = useState(true);
	return (
		<div id="post-container">
			<MainHeader />
			<main id="post-main">
				<div className="post-inner-index">
					{allPost ? <PostList /> : <OnePost />}
				</div>
			</main>
			<footer id="post-footer">
				copy tistory
			</footer>
		</div>
	);
}

const Blog = props => {
	return (
		<div id="post-wrap">
			<MenuBar />
			<PostMain />
		</div>
	);
};

Blog.propTypes = {

};

export default Blog;
