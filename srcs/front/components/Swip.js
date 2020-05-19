import React, { useEffect } from 'react';
import Swiper from 'react-id-swiper';
import Test from './Test';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

const Swip = ({ data }) => {
	const dispatch = useDispatch();

	useEffect(()=> {
		dispatch({
			type: 'HELLO_SAGA',
		})
	}, []);

	const params = {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	};

	return (
		<SwipContainer>
			<Swiper {...params}>
				{data.work.map((c) => {
					return (
						<div key={(c.id)}>
							<Test page={c}/>
						</div>
					);
				})}
			</Swiper>
		</SwipContainer>
	);
};

const SwipContainer = styled.div`
	margin: 5vw 5vh;
`;

Swip.propTypes = {
	data: PropTypes.object,
}

export default Swip;
