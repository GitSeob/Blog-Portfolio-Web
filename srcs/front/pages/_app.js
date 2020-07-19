import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import AOS from 'aos';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import '../css/main.css';
import 'aos/dist/aos.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import wrapper from '../store/configureStore';
import AppLayout from '../containers/AppLayout';
import ManageMenu from '../containers/ManageMenu';
import Loading from '../components/Loading';
import { LOAD_ADMIN_REQUEST } from '../reducers/admin';

const Home = ({ pathname, Component, windowSize }) => {
	const { blogTitle, description, faviconURL, isLoading } = useSelector(state=>state.information);
	const { isLoadingPosts } = useSelector(state=>state.posts);
	const [ isLoaded, setLoaded ] = useState(false);
	useEffect(() => {
		AOS.init({
			duration: 1500
		});
		AOS.refresh();
	});

	useEffect(() => {
		if( isLoading || isLoadingPosts ) {
			setLoaded(true);
		} else {
			setLoaded(false);
		}
	}, [isLoadingPosts, isLoading, isLoaded])

	const WrapComponent = ( ) => {
		const LayOut = useCallback(() => {
			if (pathname === '/portfolio' || pathname === '/login')
			{
				return (
					<>
					<Background>
						<Component />
					</Background>
					</>
				);
			}
			else if ( pathname === '/manage')
			{
				return (
					<>
					<Head>
						<title>관리자 페이지</title>
					</Head>
					<Background>
						<ManageMenu>
							<Component />
						</ManageMenu>
					</Background>
					</>
				)
			}
			else
			{
				return (
					<>
					<AppLayout pathname={pathname} windowSize={windowSize}>
						<Component />
					</AppLayout>
					</>
				);
			}
		}, []);

		return (
			<LayOut />
		);
	}

	return (
		<>
		<Head>
			<title>{blogTitle}</title>
			<meta charSet='utf-8' />
			<meta name="description" content={description} />
			<meta name="og:description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="shortcut icon" href={faviconURL} />
			<link rel="subresource" href="https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:300,400,500" as="style" crossOrigin="anonymous" />
			<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
		</Head>
		<WrapComponent />
		{/*{isLoaded && <Loading />}*/}
		</>
	);
};

Home.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

const Background = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	margin: 0;
`;

Home.getInitialProps = async (context) => {
	const { ctx, Component } = context;
	return {pathname: ctx.pathname };
};

export default wrapper.withRedux(Home);
