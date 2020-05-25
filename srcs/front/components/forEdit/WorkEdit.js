import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useInput } from '../../pages/login';
import { PlaylistAdd, Send, Cancel, AddPhotoAlternate, AddBox } from '@material-ui/icons';
import { InputAttr, Attr } from './AboutEdit';
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

const ListWork = ({ index, ActivateTab, ActiveTab, data }) => {
	const [title_value, OCTitle] = useInput(data.title);
	const [desc_value, OCDesc] = useInput(data.description);

	const isActive = ActiveTab === index;
	const innerHeight = {
		maxHeight: `${isActive ? 100 : 0}em`
	}

	return (
		<div className="">
			<ul className="list-under-menu" id="work-1">
				<div className="list-header">
					<button onClick={ActivateTab} className="listTitle">{data.title}</button>
					<button className="deleteButton"><Cancel /></button>
				</div>
				<div className="list-wa-menu" style={innerHeight}>
					<AEC>
						<InputAttr name="Project Name" value={title_value} onChangeValue={OCTitle}/>
						<InputAttr rows={5} name="Project description" value={desc_value} onChangeValue={OCDesc}/>
						<Attr name="images" value={<ImageContainer imgPath={data.imgPath} />}/>
						<EditAttr>
							<AttrName style={{background: 'rgb(30, 30, 30)'}}>content list</AttrName>
							<div className="list-wrapper">
								{data.content.map((c, i) => {
									return (
										<AttrOfList key={(i)} value={c} />
									);
								})}
							</div>
						</EditAttr>
					</AEC>
					<div className="submit-container">
						<button className="add-attribute">
							<AddBox /> Add Contents
						</button>
						<button className="add-attribute">
							<AddPhotoAlternate /> Add images
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

	const ActivateTab = (index) => {
		if (currentIndex === index){
			setIndex(-1);
		} else {
			setIndex(index);
		}
	};

	return (
		<>
			{data.work.map((c, i) => {
				return (
					<ListWork key={(c.id)} index={i} ActiveTab={currentIndex} ActivateTab={ActivateTab.bind(null, i)} data={c} />
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
