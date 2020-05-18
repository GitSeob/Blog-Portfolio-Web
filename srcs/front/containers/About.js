import React from 'react';
import {Box, Filter, AboutContent, UnderLine} from '../css/styledCss';
import Header from '../components/Header';

const About = ({ about }) => {
	return (
		<Box className='about'>
			<Filter className='notFilter'>
				<Header subTitle={about.subTitle} title={about.title}/>
				<AboutContent>
					{about.content}
				</AboutContent>
				<UnderLine />
			</Filter>
		</Box>
	);
};

export default About;
