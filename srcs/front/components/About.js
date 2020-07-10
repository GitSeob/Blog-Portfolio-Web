import React from 'react';
import {Box, Filter, AboutContent, UnderLine} from '../css/styledCss';
import Header from './Header';

const About = ({ data }) => {
	return (
		<Box id='about' role='region' className="l-section">
			<div data-aos="zoom-in-right" className="l-section-inner">
				<Header classname="right" subTitle={data.about_sub_title} title={data.about_title}/>
				<AboutContent>
					{data.about_content}
				</AboutContent>
			</div>
		</Box>
	);
};

export default About;
