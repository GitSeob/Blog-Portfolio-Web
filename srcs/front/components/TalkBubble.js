import React from 'react';
import PropTypes from 'prop-types';
import {Bubble} from '../css/styledCss';
import styled from 'styled-components';
import {CheckCircle} from '@material-ui/icons'

const TalkBubble = ({ abil }) => {
	return (
		<Container className="abil">
			<Bubble>
				<figcaption>{abil.list_title}</figcaption>
				<ListContainer>
					{abil.Ab_lists.map((c, i) => {
						return (
							<ListOne key={(i)}>
								<CheckCircle style={{width: '14px'}}/><p>{c.list_attribute}</p>
							</ListOne>
						);
					})}
				</ListContainer>
			</Bubble>
		</Container>
	);
};

const Container = styled.figure`
	color: white;
	width: 100%;
	display: flex;

	&.abil {
		margin-block-end: 1em;
		margin-inline-start: 40px;
		margin-inline-end: 40px;
	}
`;

const ListContainer = styled.ul`
	display: flex;
	flex-direction: column;
	position: relative;
	max-width: 40em;
	padding: 0;
	margin-bottom: 2em;
	// margin-left: auto;
	// margin-right: auto;

	// li {
	// 	display: list-item;
	// 	margin: 0;
	// 	padding-right: 1em;
	// 	position: relative;
	// 	text-align: -webkit-match-parent;
	// }
`;

const ListOne = styled.li`
	display: flex;
	flex-direction: row;
	margin: 0;
	padding-right: 1em;
	margin-bottom: .5em;

	& p {
		margin-left: .5em;
		font-size: 14px;
		text-align: left;
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
