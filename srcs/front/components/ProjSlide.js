import React from 'react';

const ProjSlide = ({ page , id = 1}) => {
	const aosValue = id % 2 === 0 ? 'fade-right' : 'fade-left';
	const order = {
		order: `${id % 2 === 0 ? 1 : -1}`
	}
	return (
		<div data-aos={aosValue}>
		<article role='article' id={id} className="gallery-item">
			<figure role="group" className="gallery-figure">
				<div className="gallery-image">
					<img className="gallery-image-thumb" src={page.imgSrc} alt={page.proj_name} />
				</div>
				<figcaption style={order} className="gallery-caption">
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
						{page.Work_rows.map((c, i) => {
								return (
									<tr key={(i)}>
										<td data-th="col1">
											{c.row_name}
										</td>
										<td data-th="col2">
											{c.row_descript}
										</td>
										<td data-th="col3">
											{c.row_content}
										</td>
									</tr>
								);
							})
						}
				</tbody>
			</table>
		</article>
		</div>
	);
};


ProjSlide.propTypes = {

};

export default ProjSlide;
