import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../css/styledCss';
import AbilityList from './AbilityList';
import Header from './Header';
import styled from 'styled-components';

const Ability = ({ data }) => {
	return (
		<Box id='ability' role='region' className="l-section">
			<div data-aos="zoom-in-left">
				<Header classname="left" subTitle={data.ability_sub_title} title={data.ability_title} />
				<BubbleContainer>
					{data.Abilities.map((c, i) => {
						return (
							<AbilityList key={(i)} abil={c}/>
						);
					})}
				</BubbleContainer>
			</div>
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
