import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { AEC } from '../../css/styledEdit';
import { EditAttr, AttrName, AttrContent} from '../../css/styledEdit'
import { Cancel, PlaylistAdd, AddBox, Send } from '@material-ui/icons'
import { InputAttr } from './AboutEdit';
import { useInput } from '../LoginForm';

export const AttrOfList = ({ value }) => {
	const [at, OCA] = useInput(value);

	return (
		<div className="list-attribute">
			<input className="edit-list-input" type="text" value={at} onChange={OCA} />
			<button className='attrDelbtn'>
				<Cancel />
			</button>
		</div>
	);
}

const ListAbil = ({ index, ActivateTab, ActiveTab, data }) => {
	const [title_value, onChangeTitle] = useInput(data.name);
	const isActive = ActiveTab === index;
	const innerHeight = {
		maxHeight: `${isActive ? 100 : 0}em`
	}

	return (
		<div className="">
			<ul className="list-under-menu" id="work-1">
				<div className="list-header">
					<button onClick={ActivateTab} className="listTitle">{data.name}</button>
					<button className="deleteButton"><Cancel /></button>
				</div>
				<div className="list-wa-menu" style={innerHeight}>
					<AEC>
						<InputAttr name="attribute name" value={title_value} onChangeValue={onChangeTitle}/>
						<EditAttr>
							<AttrName style={{background: 'rgb(30, 30, 30)'}}>attribute list</AttrName>
							<div className="list-wrapper">
								{data.list.map((c, i) => {
									return (
										<AttrOfList key={(i)} value={c} />
									);
								})}
							</div>
						</EditAttr>
					</AEC>
					<div className="submit-container">
						<button className="add-attribute">
							<AddBox /> Add Attribute
						</button>
						<button className="submit-attr-btn">
							<Send /> Submit This Attribute
						</button>
					</div>
				</div>
			</ul>
		</div>
	);
}

const AbilityEdit = ({ data }) => {
	const [currentIndex, setIndex] = useState(-1);
	const [title, OCTitle] = useInput(data.ability_title);
	const [subTitle, OCSubTitle] = useInput(data.ability_sub_title);

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
			{data.ability_attribute.map((c, i) => {
				return (
					<ListAbil key={(i)} index={i} ActiveTab={currentIndex} ActivateTab={ActivateTab.bind(null, i)} data={c} />
				);
			})}
			<AEC>
				<button className="add-port-list">
					<PlaylistAdd/> Add Abilitiess
				</button>
			</AEC>
		</>
	);
};

AbilityEdit.propTypes = {

};

export default AbilityEdit;
