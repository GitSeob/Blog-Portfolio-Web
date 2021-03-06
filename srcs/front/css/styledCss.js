import styled from 'styled-components';

export const Box = styled.section`
	position: relative;
	flexDirection: column;

	@media screen and (max-width: 1499px) {
		padding: 100px 5vw;
	}

	&.work {
		background-color: white;
	}

	&.pr {
		background-color: #FFBC98;
	}

	&.footer {
		background-color: rgb(252, 188, 126);;
	}
`;

export const DoorH1 = styled.p`
	@font-face {
		font-family: 'Days';
		src: url(./fonts/Days.otf) format('opentype');
	}
	margin: 10px 0 0 0;
	font-family: 'Days', sans-serif;
`;

export const DoorH2 = styled.h2`
	margin: -10px 0 100px 0;
	color: white;
`;

export const DoorContainer = styled.div`
	overflow: hidden;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background-color: rgb(252, 188, 126);
`;

export const InnerContent = styled.section`
	display: block;
	position: relative;
	width: inherit;
	height: 100%;
	min-height: inherit;
	box-sizing: border-box;
	padding: 100px 5vw;
`;

export const Filter = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	height: 100%;
	background-color: #FFF;
	background-color: rgba( 255, 255, 255, 0.3 );
	z-index: 10;
	align-items: center;
	text-align: center;
	justify-content: center;
	// padding-top: 680px;
	&.ability {
		background-color: rgba( 255, 255, 255, 0.1 );
	}
	&.notFilter {
		background-color: transparent;
	}
`;

export const TestInner = styled.div`
	position: relative;
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const AboutContent = styled.div`
	color: #FFFFFF;
	font-size: 12pt;
	font-align: center;
	max-width: 35rem;
	margin-top: 5rem;
	margin-left: auto;

	@media screen and (max-width: 1259px) {
		margin-left: auto;
		margin-right: auto;
	}

	& p {
		font-family: "Roboto",system-ui,-apple-system,BlinkMacSystemFont,"Malgun Gothic",Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		line-height: 2;
		font-size: 14px;
	}
`;

export const UnderLine = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	height: 50px;
	width: 0px;
	border-left: 1px solid #FFFFFF;

	&.work {
		border-left: 1px solid #FCBC98;
	}
`;

export const Bubble = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0;

	& figcaption {
		margin-bottom: .5em;
		font-size: 18px;
	}

	& h1 {
		text-align: left;
		font-size: 20px;
	}

	& div {
		font-size: 12px;
		font-weight: 300;
		text-align: center;
	}
`;
