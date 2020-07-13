import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Bubble } from '../css/styledCss';
import { CheckCircle } from '@material-ui/icons'

const AbilityList = ({ abil }) => {
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
	position: relative;
	max-width: 40em;
	padding: 0;
	margin-bottom: 2em;

	@media screen and (max-width: 1259px) {
		margin-left: auto;
		margin-right: auto;
	}

`;

const ListOne = styled.li`
	position: relative;
	margin: 0;
	padding-right: 1em;
	padding-left: 12px;
	margin-bottom: .5em;

	& svg {
		position: absolute;
		left: 0;
		top: -2px;
	}
	@media screen and (max-width: 1259px) {
		display: inline-block;
		margin: 0 .5em
	}

	@media screen and (max-width: 600px) {
		display: list-item;
	}

	& p {
		margin-left: .5em;
		text-align: left;
	}
`;

AbilityList.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
};

export default AbilityList;
