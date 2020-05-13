import React from 'react';
import styled from 'styled-components';

const Test = ({ v }) => {
	const pad = (n, width) => {
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
	}

	return (
		<Ttest>
			<div style={{width:'100%', display: 'flex', flexDirection: 'row'}}>
				<IMG src={v.imgPath}/>
				<div style={{width: '50%', display: 'flex', flexDirection: 'column'}}>
					<div style={{margin: '20px 0 0 10%', height: '100px', display: 'flex', textAlign: 'left', alignItems: 'center'}}>
						<h1 style={{color: '#FCBC98', width: '10%', fontSize: '50pt', marginRight: '40px'}}>{pad(v.id, 2)}</h1>
						<h2 style={{width: '90%'}}>{v.title}</h2>
					</div>
					<div>
						<p style={{margin: '0 10%', textAlign: 'left'}}>
							{v.infomation}
						</p>
					</div>
				</div>
			</div>
			<div style={{width: '100%', height: '400px', marginTop: '10%'}}>
				<ul style={{width: '80%', margin: '0', textAlign: 'left', lineHeight: '280%'}}>
					{v.content.map((c) => {
						return (
							<li>{c}</li>
						);
					})}
				</ul>
			</div>
		</Ttest>
		// <div style={{width: '100vw', height: '100%'}}>
		// 	<h1>{text}</h1>
		// </div>
	);
};

const Ttest = styled.div`
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: 5% 5%;
`;

const IMG = styled.img`
	width: 50%;
	height: 40vh;
	left: 0;
`;


Test.propTypes = {

};

export default Test;
