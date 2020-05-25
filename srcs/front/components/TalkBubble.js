import React from 'react';
import PropTypes from 'prop-types';
import {Bubble} from '../css/styledCss';
import styled from 'styled-components';

const TalkBubble = ({ abil }) => {
	return (
		<Container className={abil.id % 2 == 0 ? 'left' : 'right'}>
			<Bubble>
				<h1>{abil.title}</h1>
				<ListContainer>
				{abil.list.map((c) => {
					return (
						<ListOne key={(c.id)}>
							<Circle /><p>{c.content}</p>
						</ListOne>
					);
				})}
				</ListContainer>
			</Bubble>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: flex;
	margin: 30px 0 0 5%;
	&.right{
		justify-content: flex-end;
		margin: 30px 5% 0 0;
	}
`;

const ListContainer = styled.div`
	margin: -10px 0 10px 20px;
	display: flex;
	flex-wrap: wrap;
	position: relative;
`;

const ListOne = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-right: 30px;

	& p {
		font-size: 15pt;
		font-weight: 500;
	}
`;

const Circle = styled.div`
	width: 10px;
	height: 10px;
	margin-right: 10px;
	background-color: #000;
	border-radius: 50%;
`;

TalkBubble.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
};

export default TalkBubble;
