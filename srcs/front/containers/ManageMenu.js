import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import {
	Container,
	Aside,
	ContentContainer,
	ContentHead,
	EditBox,
	SideTitle,
	SideCate,
	QuitButton,
} from '../css/styledEdit';
import { ExitToApp, Tv, ListAlt, AccountBox } from '@material-ui/icons';
import { SET_BLOG, SET_PORT } from '../reducers/manage';
import LoginForm from '../components/LoginForm';
import Posting from '../containers/Posting';

const ManageMenu = ({ children }) => {
	const dispatch = useDispatch();
	const { admin } = useSelector(state=>state.admin);
	const { postingWindowOpen, category_list } = useSelector(state=>state.posts);
	const { menuStatus } = useSelector(state=>state.manage);

	const clickMenu = useCallback((i) => (e) => {
		e.preventDefault();
		if (i === 0) {
			dispatch({
				type: SET_PORT,
			})
		}
		else if (i == 1){
			dispatch({
				type: SET_BLOG
			})
		}
		else {
			if (confirm('정말 나가시겠습니까?')) {
				Router.push('/');
			}
		}
	})

	return (
		<>
		{ !admin ? <LoginForm /> :
		<Container>
			<Aside>
				<SideTitle><img  style={{width: '100%'}} src={'./images/mainIcon.png'} /></SideTitle>
				<SideCate className={menuStatus.port && 'click'} name="port" onClick={clickMenu(0)}>
					<Tv style={{ width: '1em', height: '1em', fontSize: '1.5rem',color: 'inherit', marginLeft:'15px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
					<div>Portfolio</div>
				</SideCate>
				<SideCate className={menuStatus.blog && 'click'} name="post" onClick={clickMenu(1)}>
					<ListAlt style={{ width: '1em', height: '1em', fontSize: '1.5rem',color: 'inherit', marginLeft:'15px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
					<div>Blog</div>
				</SideCate>
				<QuitButton onClick={clickMenu(999)}>
					<ExitToApp style={{ width: '1em', height: '1em', fontSize: '1.5rem',color: 'inherit', marginLeft:'15px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
					<div>QUIT</div>
				</QuitButton>
			</Aside>
			<EditBox>
				<ContentContainer>
					{ children }
				</ContentContainer>
			</EditBox>
		</Container>
		}
		{ postingWindowOpen && <Posting category_list={category_list}/> }
		</>
	);
};

export default ManageMenu;
