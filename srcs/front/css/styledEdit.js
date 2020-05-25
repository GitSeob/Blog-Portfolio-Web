import styled from 'styled-components';

export const Container = styled.div`
	margin: 0;
	padding: 0;
	position: relative;
	overflow: auto;
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
	position: fixed;
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
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding-left: 15%;
`;

export const ContentHead = styled.div`
	width: 100%;
	height: 80px;
	padding: 0px 30px;
`;

export const ContentContainer = styled.div`
	height: 100%;
	width: 100%;
	padding: 0;
	// background: #2F323A;
	overflow: auto;
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
	&:focus {
		outline: 0;
	}
	&.click {
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
	width: 100%;
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

export const EditAttr = styled.div`
	width: 100%;
	display: flex;
`;

export const AttrName = styled.div`
	width: 20%;
	padding: 16px 20px;
	color: white;
	position: relative;
	background: inherit;
	// &:before {
	// 	content: "";
	// 	position: absolute;
	// 	width: 14px;
	// 	height: 14px;
	// 	// background: rgb(30, 30, 30);
	// 	right: -7px;
	// 	bottom: 0;
	// 	transform: translateY(-50%) rotate(45deg);
	// 	// transform: rotate(45deg);
	// }
`;

export const AttrContent = styled.div`
	width: 100%;
	padding: 16px 20px;
	background: #f4f5f9;
`;

export const AEC = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0px;
	z-index: 1;
	background: rgb(30, 30, 30);
	& ${EditAttr}:nth-child(2) {
		background: rgb(40, 40, 40);
	}
`;
