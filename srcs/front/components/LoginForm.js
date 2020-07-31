import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LOGIN_ADMIN_REQUEST } from '../reducers/admin';
import { CarrotSvg } from '../containers/Door';
import useInput from '../hooks/useInput';

const LoginForm = ({setClickedLogin}) => {
	const { logInErrorReason } = useSelector(state=>state.admin);
	const dispatch = useDispatch();

	const [loginStatus, setLoginStatus] = useState('');
	const [id, onChangeId] = useInput('')
	const [password, onChangePassword] = useInput('')
	const [toggleID, setToggleID] = useState('label');
	const [togglePW, setTogglePW] = useState('label');

	const onSubmitForm = useCallback((e) => {
		e.preventDefault();
		if (!id){
			alert('아이디를 입력하세요.');
			return ;
		}
		if (!password){
			alert('비밀번호를 입력하세요.');
			return ;
		}
		dispatch({
			type: LOGIN_ADMIN_REQUEST,
			data: {
				userId: id,
				password,
			}
		});
	}, [id, password]);

	const closeLoginForm = useCallback((e) => {
		e.preventDefault();
		setClickedLogin(false);
	})

	useEffect(() => {
		if (id){
			setToggleID('valid');
		}
		else {
			setToggleID('label');
		}
		if (password){
			setTogglePW('valid');
		}
		else {
			setTogglePW('label');
		}
		setLoginStatus(logInErrorReason);
	}, [id, password, toggleID, togglePW, logInErrorReason])

		return (
			<div className="login-form-wrap">
				<div className="App">
					<header className="App-header">
						<div className="Box">
							<CarrotSvg iconWidth="100" iconHeight="100" classname="App-logo" />
							<h2>
								ADMIN Login
							</h2>
							<form onSubmit={onSubmitForm}>
								<div className="InputBox">
									<input
									type="text"
									autoComplete="username"
									name="id"
									onChange={onChangeId}
									reguired=""></input>
									<label className={toggleID}>Username</label>
								</div>
								<div className="InputBox">
									<input
									type="password"
									autoComplete="current-password"
									name="userPW"
									onChange={onChangePassword}
									reguired=""></input>
									<label className={togglePW}>Password</label>
								</div>
								{ loginStatus !== '' &&
									<div className="errorLoginMessage">
										{loginStatus}
									</div>
								}
								<input
									type="submit"
									name=""
									value="submit">
								</input>
								<input
									type="button"
									value="cancel"
									onClick={closeLoginForm}>
								</input>
							</form>
						</div>
					</header>
				</div>
			</div>
		);
};

LoginForm.propTypes = {

};

export default LoginForm;
