import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TweenMax, Power3 } from 'gsap';
import ScrollMagic from 'scrollmagic';

const Scroll = props => {
	if (typeof window !== 'undefined') {
		const controller = new ScrollMagic.Controller();
		const wipeAnimation = new TimelineMax()
		.fromTo(".two", 1, {x:"-100%"}, {x:"0%"} )
		.fromTo(".three", 1, {y:"-100%"}, {y:"0%"} )
		.fromTo(".four", 1, {x:"100%"}, {x:"0%"} )

		const scene = new ScrollMagic.Scene({
			triggerElement: '#container',
			triggerHook: 'onLeave',
			duration: '500%',
		}).setPin('#container').setTween(wipeAnimation).addIndicators().addTo(controller);
	}

	return (
		<ScrollCont id="container">
			<Panel className="one">
				<b>ONE</b>
			</Panel>
			<Panel className="two">
				<b>TWO</b>
			</Panel>
			<Panel className="three">
				<b>THREE</b>
			</Panel>
			<Panel className="four">
				<b>FOUR</b>
			</Panel>
		</ScrollCont>
	);
};

const ScrollCont = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden
`;

const Panel = styled.section`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	font-size: 60px;
	text-align: center;
	color: #fff;

	&.one {
		background-color: #67D5B5;
	}

	&.two {
		background-color: #EE7785;
	}

	&.three {
		background-color: #C89EC4;
	}

	&.four {
		background-color: #84B1ED;
	}
`;

export default Scroll;
