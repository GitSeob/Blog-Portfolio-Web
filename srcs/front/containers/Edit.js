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
import { ExitToApp, Tv, ListAlt } from '@material-ui/icons';
import EditPort from '../components/EditPort';
import EditPost from '../components/EditPost';

const SelectEdit = ({status}) => {
	if (status.main === true) {
		return (
			<h1>
				Almost before we knew it, we had left the ground.
			</h1>
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
				<SideTitle> ADMIN PAGE </SideTitle>
				<SideCate name="port" onClick={clickPort}>
					<Tv style={{color: 'inherit', marginLeft:'15px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
					<div>Portfolio</div>
				</SideCate>
				<SideCate name="post" onClick={clickPost}>
					<ListAlt style={{color: 'inherit', marginLeft:'15px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
					<div>Posts</div>
				</SideCate>
				<QuitButton >
					<ExitToApp style={{color: 'inherit', marginLeft:'15px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
					<div>QUIT</div>
				</QuitButton>
			</Aside>
			<EditBox>
				<ContentHead>
					TEST
				</ContentHead>
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
