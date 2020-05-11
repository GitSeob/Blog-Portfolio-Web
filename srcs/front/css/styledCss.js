import styled from 'styled-components';

export const Box = styled.div`
	position: relative;
	// background-color: rgb(255, 188, 126, 0.2);
	display: flex;
	flexDirection: column;

	&.about {
		background-color: #FCBC98;
	}

	&.ability {
		background-color: #FFBC98;
	}

	&.work {
		background-color: #FCF7F7;
	}

	&.pr {
		background-color: #FFBC98;
	}

	&.footer {
		background-color: rgb(252, 188, 126);;
	}
`;

export const H1 = styled.h1`
	@font-face {
		font-family: 'Days';
		src: url(../fonts/Days.otf) format('opentype');
	}
	margin: 10px 0 0 0;
	font-family: 'Days', sans-serif;
`;

export const H2 = styled.h2`
	margin: -10px 0 100px 0;
	color: white;
`;

export const DoorContainer = styled.div`
	width: 100%;
	height: 100vh;
	min-height: 640px;
	background-color: rgb(252, 188, 126);
`;

export const InnerContent = styled.div`
	position: relative;
	z-index: 1;
	width: inherit;
	height: 100%;
	min-height: inherit;
	max-width: 2560px;
	margin: 0 auto;
	background-size: cover;
	// background-image: url(images/background.jpg);
	// background-color: rgb(252, 188, 126);
	background-repeat: no-repeat;
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
	margin: 100px 0;
	color: #FFFFFF;
	font-size: 12pt;
	font-align: center;
	padding: 0 100px;
`;

export const UnderLine = styled.div`
	height: 50px;
	width: 0px;
	border-left: 1px solid #FFFFFF;

	&.work {
		border-left: 1px solid #FCBC98;
	}
`;

export const Bubble = styled.div`
	background: #ffffff;
	width: 40%;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	border: 3px solid #FCBC84;

	& h1 {
		color: #818080;
		text-align: left;
		margin-left: 20px;
	}

	& div {
		color: #5C5353;
		font-size: 15pt;
		font-weight: 300;
		text-align: center;
	}
`;
