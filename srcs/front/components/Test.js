import React from 'react';
import styled from 'styled-components';

const Test = ({ page , id = 1}) => {
	return (
		<article role='article' id={id} className="gallery-item">
			<figure role="group" className="gallery-figure">
				<div className="gallery-image">
					<img className="gallery-image-thumb" src={page.imgPath} alt={page.proj_name} />
				</div>
				<figcaption className="gallery-caption">
					<h3 className="gallery-title">
						{page.proj_name}
					</h3>
					<ul className="gallery-spec">
						<li className="gallery-spec-item">
							<strong className="gallery-spec-key">
								Category
							</strong>
							<span className="gallery-spec-value">
								{page.category}
							</span>
						</li>
						<li className="gallery-spec">
							<strong className="gallery-spec-key">
								Period
							</strong>
							<span className="gallery-spec-value">
								{page.period}
							</span>
						</li>
						<li className="gallery-spec">
							<strong className="gallery-spec-key">
								Member
							</strong>
							<span className="gallery-spec-value">
								{page.members}
							</span>
						</li>
					</ul>
					<div id="work-description">
						<p>
							{page.description}
						</p>
					</div>
					<div className="ui-group">
						<a role="button" className="ui-button" href={page.repo} target="_blank">
							Repo
						</a>
					</div>
				</figcaption>
			</figure>
			<table className="gallery-table">
				<thead>
					<tr>
						<th className="gallery-table-col col1">
							col 1
						</th>
						<th className="gallery-table-col col2">
							col 1
						</th>
						<th className="gallery-table-col col3">
							col 1
						</th>
					</tr>
				</thead>
				<tbody>
						{page.table_rows.map((c, i) => {
								return (
									<tr key={(i)}>
										<td data-th="col1">
											{c.col1}
										</td>
										<td data-th="col2">
											{c.col2}
										</td>
										<td data-th="col3">
											{c.col3}
										</td>
									</tr>
								);
							})
						}
				</tbody>
			</table>
		</article>
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
