import styled from 'styled-components';

export const Container = styled.div`
	margin: 0;
	padding: 0;
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
	background-color: #F8FAFF;
	display: flex;
	@font-face {
		font-family: 'Noto Sans TC';
		src: url(./fonts/NotoSansTC-Medium.otf) format('opentype');
	}
	font-family: 'Noto Sans TC', sans-serif;
	align-items: center;
`;

export const Aside = styled.aside`
	background-color: #2F323A;
	width: 15%;
	height: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	vertical-align: middle;
	div {
		color: white;
		font-weight: 500;
	}
`;

export const EditBox = styled.div`
	width: 85%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const ContentHead = styled.div`
	width: 100%;
	height: 80px;
	padding: 0px 30px;
`;

export const ContentContainer = styled.div`
	height: 100%;
	width: 100%;
	padding: 0 30px;
`;

export const SideTitle = styled.div`
	font-size: 24px;
	font-weight: 600;
	color: white;
	padding: 50px 20px;
`;

export const SideCate = styled.button`
	width: 100%;
	height: 60px;
	font-size: 18px;
	position: relative;
	color: white;
	display: flex;
	text-decoration: none;
	box-sizing: border-box;
	transition: 0.5s;
	transition-property: background;
	background: #2F323A;
	border: none;
	&:visited {
		color: inherit;
	}
	&:hover {
		background: #19B3D3;
	}
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: inherit;
	}
`;

export const QuitButton = styled.a`
	width: inherit;
	height: 60px;
	font-size: 18px;
	position: absolute;
	bottom: 0;
	display: flex;
	color: white;
	text-decoration: none;
	box-sizing: border-box;
	transition: 0.5s;
	transition-property: background;
	&:visited {
		color: inherit;
	}
	&:hover {
		background: #19B3D3;
	}
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: inherit;
	}
`;
