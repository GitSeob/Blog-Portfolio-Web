import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import {H1} from '../css/styledCss';
import PropTypes from 'prop-types';
import Test from './Test'
// import sc from '../images/birth.png'

const TOTAL_SLIDES = 3;

const Port = props => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRef = useRef(null);

	const nextSlide = () => {
		if (currentSlide >= TOTAL_SLIDES - 1) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const prevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(TOTAL_SLIDES - 1);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	useEffect(() => {
		slideRef.current.style.transition = "all 0.5s ease-in-out";
		slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
	}, [currentSlide]);

	const img1 = 'images/test1.jpg'

	return (
		<Container>
			{currentSlide}
			<SliderContainer ref={slideRef}>
				<Test img='' />
				<Test img='' />
				<Test img='' />
			</SliderContainer>
			<Button className='prev' onClick={prevSlide}>Previous Slide</Button>
			<Button className='next' onClick={nextSlide}>Next Slide</Button>
		</Container>
	);
};

Port.propTypes = {

};

const Container = styled.div`
	postion: relative;
	width: 100%;
	height: calc(100vh - 260px);
	overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	// all: unset;
	&.prev {
		left: 0;
	}
	&.next {
		right: 0;
	}
	border: 1px solid coral;
	padding: 0.5em 2em;
	color: coral;
	border-radius: 10px;
	&:hover {
		transition: all 0.3s ease-in-out;
		background-color: coral;
		color: #fff;
	}
`;
const SliderContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex; //이미지들을 가로로 나열합니다.
`;

export default Port;
