import React from 'react';
import { Box, AboutContent } from '../css/styledCss';
import Header from './Header';

const About = ({ data }) => {
	const contentValue = data.about_content.split('\n');
	return (
		<Box id='about' role='region' className="l-section">
			<div data-aos="zoom-in-right" className="l-section-inner">
				<Header classname="about" subTitle={data.about_sub_title} title={data.about_title}/>
				<AboutContent>
					{contentValue.map((c, i) => {
						return (
							<p key={(i)}>
								{c}
							</p>
						);
					})}
				</AboutContent>
			</div>
		</Box>
	);
};

export default About;
