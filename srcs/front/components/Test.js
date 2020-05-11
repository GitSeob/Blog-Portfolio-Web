import React from 'react';
import styled from 'styled-components';

const Test = ({ img, text  }) => {
	console.log(img);
	return (
		<Ttest>
			<div style={{width:'100%', display: 'flex', flexDirection: 'row'}}>
				<IMG src={img}/>
				<div style={{width: '50%', display: 'flex', flexDirection: 'column'}}>
					<div style={{margin: '20px 0 0 10%', height: '100px', display: 'flex', textAlign: 'left', alignItems: 'center'}}>
						<h1 style={{color: '#FCBC98', width: '10%', fontSize: '50pt', marginRight: '20px'}}>01</h1>
						<h2 style={{width: '90%'}}>SEMO:세모</h2>
					</div>
					<div>
						<p style={{margin: '0 10%', textAlign: 'left'}}>
						대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.<br/><br/>

국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다. 평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.<br/><br/>

군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.
						</p>
					</div>
				</div>
			</div>
			<div style={{width: '100%', height: '400px', marginTop: '10%'}}>
				<ul style={{width: '80%', margin: '0 10%', textAlign: 'left', lineHeight: '280%'}}>
					<li>국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.</li>
					<li>대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.</li>
					<li>모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다.</li>
					<li>군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 대법원장의 임기는 6년으로 하며, 중임할 수 없다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.</li>
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
	width: 100%;
	// height: 80vh;
`;

const IMG = styled.img`
	width: 50%;
	height: 40vh;
	left: 0;
`;


Test.propTypes = {

};

export default Test;
