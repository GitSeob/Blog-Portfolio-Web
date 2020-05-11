import React from 'react';
import PropTypes from 'prop-types';
import {Box, UnderLine, Filter} from '../css/styledCss';
import TalkBubble from '../components/TalkBubble';
import Header from '../components/Header';
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

const Ability = props => {
	return (
		<Box className='ability'>
			<Filter className='ability'>
				<Header subTitle='Ability' title='What can I do' />
				<BubbleContainer>
					{dummy.abilities.map((v, i) => {
						return (
							<TalkBubble key={v.id} id={v.id} title={v.title} list={v.list}/>
						);
					})}
				</BubbleContainer>
				<UnderLine />
			</Filter>
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
`;

Ability.propTypes = {

};

export default Ability;
