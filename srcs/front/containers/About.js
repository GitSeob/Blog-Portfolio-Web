import React from 'react';
import {Box, Filter, AboutContent, UnderLine} from '../css/styledCss';
import Header from '../components/Header';

const About = props => {
	return (
		<Box className='about'>
			<Filter className='notFilter'>
				<Header subTitle='HELLO' title='About Myself'/>
				<AboutContent>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Integer scelerisque mattis aliquam.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur in felis vitae justo pulvinar varius sed in nisl.
Curabitur porttitor pretium rhoncus. Nunc vitae lacus a purus mollis laoreet in eget massa. Sed vel tristique lectus. Praesent sit amet sollicitudin urna.

Nunc dolor mi, vehicula non pellentesque id, sagittis non lectus. Quisque finibus dolor dolor, vitae interdum justo pharetra in. Etiam gravida sem vel turpis convallis cursus id nec eros. Pellentesque efficitur tristique lacus.

Morbi a justo eleifend, imperdiet risus a, sodales leo. Maecenas fringilla quam vitae nunc sollicitudin, a pharetra tortor vulputate. Nam lobortis in lorem at scelerisque. Vestibulum ut velit non sem aliquam mollis accumsan ac justo.
				</AboutContent>
				<UnderLine />
			</Filter>
		</Box>
	);
};

export default About;
