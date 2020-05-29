import React from 'react';
import PropTypes from 'prop-types';
import {Box, UnderLine, Filter} from '../css/styledCss';
import TalkBubble from './TalkBubble';
import Header from './Header';
import styled from 'styled-components';

const dummy = {
	abilities: [{
		id: 0,
		title: '개잘생김',
		list: [
			'눈', '코', '입', '전부다',
		]
	},{
		id: 1,
		title: '노래잘부름',
		list: [
			'2018년 화양리 지그재그 신년회 노래자랑 1등', '2017년 화양리 지그재그 신년회 노래자랑 1등',
		]
	}]
};

const Ability = ({ abil }) => {
	return (
		<Box id='ability' role='region' className="l-section">
			<Header classname="left" subTitle={abil.subTitle} title={abil.title} />
			<BubbleContainer>
				{abil.content.map((c) => {
					return (
						<TalkBubble key={(c.id)} abil={c}/>
					);
				})}
			</BubbleContainer>
		</Box>
	);
};

const BubbleContainer = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;
	margin-top: 5rem;
`;

Ability.propTypes = {

};

export default Ability;
