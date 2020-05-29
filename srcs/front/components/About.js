import React from 'react';
import {Box, Filter, AboutContent, UnderLine} from '../css/styledCss';
import Header from './Header';

const About = ({ id, about }) => {
	return (
		<Box id='about' role='region' className="l-section">
			<div className="l-section-inner">
				<Header classname="right" subTitle={about.subTitle} title={about.title}/>
				<AboutContent>
					{about.content}
				</AboutContent>
			</div>
		</Box>
	);
};

export default About;
