import React from 'react';
import Swiper from 'react-id-swiper';
import Test from './Test';

const test = [1, 2, 3, 4, 5]

const Swip = () => {
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
		<Swiper {...params}>
			{test.map((v, i) => {
				return (
					<div key={v}>
						<Test text={v} img='./images/test_mac.png'/>
					</div>
				);
			})}
		</Swiper>
	);
};



export default Swip;
