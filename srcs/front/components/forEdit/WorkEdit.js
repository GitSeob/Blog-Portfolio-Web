import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useInput } from '../LoginForm';
import { PlaylistAdd, Send, Cancel, AddPhotoAlternate, AddBox } from '@material-ui/icons';
import { InputAttr, TextAttr, Attr } from './AboutEdit';
import { AEC } from '../../css/styledEdit';
import { EditAttr, AttrName, AttrContent} from '../../css/styledEdit'
import {AttrOfList} from './AbilityEdit'

const ImageContainer = ({ imgPath }) => {
	return (
		<div className="edit-img-container">
			<img src={imgPath} className="edit-img-contents"/>
		</div>
	);
}

const TableAttr = ({ data }) => {
	const [col1, OCC1] = useInput(data.col1);
	const [col2, OCC2] = useInput(data.col2);
	const [col3, OCC3] = useInput(data.col3);

	return (
		<div className="edit-table-head edit-attr">
			<input className="edit-input edit-table" value={col1} type="text" onChange={OCC1}/>
			<input className="edit-input edit-table" value={col2} type="text" onChange={OCC2}/>
			<input className="edit-input edit-table" value={col3} type="text" onChange={OCC3}/>
		</div>
	);
}

const ListWork = ({ index, ActivateTab, ActiveTab, data }) => {
	const [proj_name, OCProj_name] = useInput(data.proj_name);
	const [category, OCCategory] = useInput(data.category);
	const [period, OCPeriod] = useInput(data.period);
	const [members, OCMembers] = useInput(data.members);
	const [descript, OCDescript] = useInput(data.description);
	const [repo, OCRepo] = useInput(data.repo)

	const isActive = ActiveTab === index;
	const innerHeight = {
		maxHeight: `${isActive ? 100 : 0}em`
	}

	return (
		<div className="">
			<ul className="list-under-menu" id="work-1">
				<div className="list-header">
					<button onClick={ActivateTab} className="listTitle">{data.proj_name}</button>
					<button className="deleteButton"><Cancel /></button>
				</div>
				<div className="list-wa-menu" style={innerHeight}>
					<AEC>
						<InputAttr name="Project Name" value={proj_name} onChangeValue={OCProj_name}/>
						<InputAttr name="Category" value={category} onChangeValue={OCCategory}/>
						<InputAttr name="Period" value={period} onChangeValue={OCPeriod}/>
						<InputAttr name="Members" value={members} onChangeValue={OCMembers}/>
						<InputAttr name="Project repo URL" value={repo} onChangeValue={OCRepo}/>
						<TextAttr rows={5} name="Project description" value={descript} onChangeValue={OCDescript}/>
						<Attr name="images" value={<ImageContainer imgPath={data.imgPath} />}/>

						<div className="edit-table-head">
							<div className="edit-table-head-item">col1</div>
							<div className="edit-table-head-item">col2</div>
							<div className="edit-table-head-item">col3</div>
						</div>
						<div className="list-wrapper">
							{data.table_rows.map((c, i) => {
								return (
									<TableAttr key={(i)} data={c} />
								);
							})}
						</div>
					</AEC>
					<div className="submit-container">
						<button className="add-attribute">
							<AddBox /> Add Table Row
						</button>
						<button className="add-attribute">
							<AddPhotoAlternate /> Change images
						</button>
						<button className="submit-attr-btn">
							<Send /> Submit This Project
						</button>
					</div>
				</div>
			</ul>
		</div>
	);
}

const WorkEdit = ({ data }) => {
	const [currentIndex, setIndex] = useState(-1);
	const [title, OCTitle] = useInput(data.work_title);
	const [subTitle, OCSubTitle] = useInput(data.work_sub_title);

	const ActivateTab = (index) => {
		if (currentIndex === index){
			setIndex(-1);
		} else {
			setIndex(index);
		}
	};

	return (
		<>
			<AEC>
				<InputAttr name="Title" value={title} onChangeValue={OCTitle}/>
				<InputAttr name="Sub Title" value={subTitle} onChangeValue={OCSubTitle}/>
			</AEC>
			{data.work_attribute.map((c, i) => {
				return (
					<ListWork key={(i)} index={i} ActiveTab={currentIndex} ActivateTab={ActivateTab.bind(null, i)} data={c} />
				);
			})}
			<AEC>
				<button className="add-port-list">
					<PlaylistAdd /> Add Project
				</button>
			</AEC>
		</>
	);
};

WorkEdit.propTypes = {

};

export default WorkEdit;
