import React, { useEffect } from 'react';
import Swiper from 'react-id-swiper';
import Test from './Test';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {LOAD_DATA_REQUEST} from '../reducers/portfolio';

const Swip = () => {
	const dispatch = useDispatch();
	const { work } = useSelector(state=>state.portfolio);

	useEffect(() => {
		dispatch({
			type: LOAD_DATA_REQUEST
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
				{work.map((v, i) => {
					return (
						<div key={v.id}>
							<Test page={v}/>
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

export default Swip;
