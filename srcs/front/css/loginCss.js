import styled from 'styled-components';

export const Limiter = styled.div`
	width: 100%;
	margin: 0 auto;

	@font-face {
		font-family: Poppins-Regular;
		src: url('../fonts/poppins/Poppins-Regular.ttf');
	}

	@font-face {
		font-family: Poppins-Medium;
		src: url('../fonts/poppins/Poppins-Medium.ttf');
	}

	@font-face {
		font-family: Poppins-Bold;
		src: url('../fonts/poppins/Poppins-Bold.ttf');
	}

	@font-face {
		font-family: Poppins-SemiBold;
		src: url('../fonts/poppins/Poppins-SemiBold.ttf');
	}
`;

export const DA = styled.a`
	font-family: Poppins-Regular;
	font-size: 14px;
	line-height: 1.7;
	color: #666666;
	margin: 0px;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
	-o-transition: all 0.4s;
	-moz-transition: all 0.4s;

	&:focus {
		outline: none !important;
	}

	&:hover {
		text-decoration: none;
		color: #6a7dfe;
		color: -webkit-linear-gradient(left, #21d4fd, #b721ff);
		color: -o-linear-gradient(left, #21d4fd, #b721ff);
		color: -moz-linear-gradient(left, #21d4fd, #b721ff);
		color: linear-gradient(left, #21d4fd, #b721ff);
	}
`;

export const LoginContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 15px;
	background: #f2f2f2;
`;

export const WrapLogin = styled.div`
	width: 390px;
	background: #fff;
	border-radius: 10px;
	overflow: hidden;
	padding: 77px 55px 33px 55px;

	box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
	-o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
	-ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const WrapLoginFormBtn = styled.div`
	width: 100%;
	display: block;
	position: relative;
	z-index: 1;
	border-radius: 25px;
	overflow: hidden;
	margin: 0 auto;

	&:hover {
		left: 0;
	}
`;

export const LoginFormBtn = styled.button`
	font-family: Poppins-Medium;
	font-size: 15px;
	color: #fff;
	line-height: 1.2;
	text-transform: uppercase;

	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
	width: 100%;
	height: 50px;
`;

export const LoginForm = styled.form`
	width: 100%
	&.validateForm {

	}
`;

export const LoginFormTitle = styled.span`
	display: block;
	font-family: Poppins-Bold;
	font-size: 30px;
	color: #333333;
	line-height: 1.2;
	text-align: center;

	i {
		font-size: 60px;
	}

	&.pb26 {
		padding-bottom: 26px;
	}

	&.pb48 {
		padding-bottom: 48px;
	}
`;

export const Zmdi = styled.i`
	display: inline-block;
	font: normal normal normal 14px/1 'Material-Design-Iconic-Font';
	font-size: inherit;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	&.zmdiFont:before {

	}
	&.zmdiEye {

	}
`;

export const WrapInput = styled.div`
	width: 100%;
	position: relative;
	border-bottom: 2px solid #adadad;
	margin-bottom: 37px;
	&.validateInput {

	}
`;

export const LoginInput = styled.input`
	outline: none;
	border: none;
	font-family: Poppins-Regular;
	font-size: 15px;
	color: #555555;
	line-height: 1.2;

	display: block;
	width: 100%;
	height: 45px;
	background: transparent;
	padding: 0 5px;
`;

export const FocusInput = styled.span`
	position: absolute;
	display: block;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	pointer-events: none;
`;

export const BtnShowPass = styled.span`
	font-size: 15px;
	color: #999999;

	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	align-items: center;
	position: absolute;
	height: 100%;
	top: 0;
	right: 0;
	padding-right: 5px;
	cursor: pointer;
	-webkit-transition: all 0.4s;
	-o-transition: all 0.4s;
	-moz-transition: all 0.4s;
	transition: all 0.4s;

	&:hover {
		color: #6a7dfe;
		color: -webkit-linear-gradient(left, #21d4fd, #b721ff);
		color: -o-linear-gradient(left, #21d4fd, #b721ff);
		color: -moz-linear-gradient(left, #21d4fd, #b721ff);
		color: linear-gradient(left, #21d4fd, #b721ff);
	}

	&.active {
		color: #6a7dfe;
		color: -webkit-linear-gradient(left, #21d4fd, #b721ff);
		color: -o-linear-gradient(left, #21d4fd, #b721ff);
		color: -moz-linear-gradient(left, #21d4fd, #b721ff);
		color: linear-gradient(left, #21d4fd, #b721ff);
	}

	i.zmdi {

	}

	i.zmdi-eye {

	}
`;

export const ContainerLoginFormBtn = styled.div`
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 13px;
`;

export const LoginFormBGBtn = styled.div`
	position: absolute;
	z-index: -1;
	width: 300%;
	height: 100%;
	background: #a64bf4;
	background: -webkit-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
	background: -o-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
	background: -moz-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
	background: linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
	top: 0;
	left: -100%;

	-webkit-transition: all 0.4s;
	-o-transition: all 0.4s;
	-moz-transition: all 0.4s;
	transition: all 0.4s;
`;

export const TextCenter = styled.div`
	text-align: center;
	padding-top: 115px;
`;

export const Text1 = styled.span`
	font-family: Poppins-Regular;
	font-size: 13px;
	color: #666666;
	line-height: 1.5;
`;

export const Text2 = styled.a`
	font-family: Poppins-Regular;
	font-size: 13px;
	color: #333333;
	line-height: 1.5;
`;
