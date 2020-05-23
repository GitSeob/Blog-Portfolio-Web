import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import EditPort from '../components/forEdit/EditPort';
import EditPost from '../components/forEdit/EditPost';
import AdminMain from '../components/adminMain';

const SelectEdit = ({status}) => {
	if (status.main === true) {
		return (
			<AdminMain />
		);
	} else if (status.port === true) {
		return (
			<EditPort />
		);
	} else {
		return (
			<EditPost />
		);
	}
}

const Edit = () => {
	const [menuStatus, setMenuStatus] = useState({
		main: true,
		port: false,
		post: false,
	});

	const clickMain = useCallback((e) => {
		e.preventDefault()
		setMenuStatus({
			main: true,
			post: false,
			port: false,
		})
	})

	const clickPort = useCallback((e) => {
		e.preventDefault()
		setMenuStatus({
			main: false,
			post: false,
			port: true,
		})
	})

	const clickPost = useCallback((e) => {
		e.preventDefault()
		setMenuStatus({
			main: false,
			post: true,
			port: false,
		})
	})

	return (
		<Container>
			<Aside>
				<SideTitle><img  style={{width: '100%'}} src={'./images/mainIcon.png'} /></SideTitle>
				<SideCate className={menuStatus.main && 'click'} name="port" onClick={clickMain}>
					<AccountBox style={{ width: '1em', height: '1em', fontSize: '1.5rem', color: 'inherit', marginLeft:'15px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
					<div>Profile</div>
				</SideCate>
				<SideCate className={menuStatus.port && 'click'} name="port" onClick={clickPort}>
					<Tv style={{ width: '1em', height: '1em', fontSize: '1.5rem',color: 'inherit', marginLeft:'15px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
					<div>Portfolio</div>
				</SideCate>
				<SideCate className={menuStatus.post && 'click'} name="post" onClick={clickPost}>
					<ListAlt style={{ width: '1em', height: '1em', fontSize: '1.5rem',color: 'inherit', marginLeft:'15px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
					<div>Posts</div>
				</SideCate>
				<QuitButton >
					<ExitToApp style={{ width: '1em', height: '1em', fontSize: '1.5rem',color: 'inherit', marginLeft:'15px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
					<div>QUIT</div>
				</QuitButton>
			</Aside>
			<EditBox>
				<ContentContainer>
					<SelectEdit status={menuStatus} />
				</ContentContainer>
			</EditBox>
		</Container>
	);
};

Edit.propTypes = {

};

export default Edit;
