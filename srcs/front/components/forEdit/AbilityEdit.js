import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { AEC } from '../../css/styledEdit';
import { EditAttr, AttrName, AttrContent} from '../../css/styledEdit'
import { Cancel, PlaylistAdd, AddBox, Send } from '@material-ui/icons'
import { InputAttr } from './AboutEdit';
import { useInput } from '../../pages/login';

export const AttrOfList = ({ value }) => {
	const [at, OCA] = useInput(value);

	return (
		<div className="list-attribute">
			<textarea className="edit-list-input" rows={1} type="text" value={at} onChange={OCA} />
			<button className='attrDelbtn'>
				<Cancel />
			</button>
		</div>
	);
}

const ListAbil = ({ index, ActivateTab, ActiveTab, data }) => {
	const [title_value, onChangeTitle] = useInput(data.title);
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
						<InputAttr name="attribute name" value={title_value} onChangeValue={onChangeTitle}/>
						<EditAttr>
							<AttrName style={{background: 'rgb(30, 30, 30)'}}>attribute list</AttrName>
							<div className="list-wrapper">
								{data.list.map((c, i) => {
									return (
										<AttrOfList key={(i)} value={c.content} />
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

	const ActivateTab = (index) => {
		if (currentIndex === index){
			setIndex(-1);
		} else {
			setIndex(index);
		}
	};

	return (
		<>
			{data.abilities.content.map((c, i) => {
				return (
					<ListAbil key={(c.id)} index={i} ActiveTab={currentIndex} ActivateTab={ActivateTab.bind(null, i)} data={c} />
				);
			})}
			<AEC>
				<button className="add-port-list">
					<PlaylistAdd/> Add Abilities
				</button>
			</AEC>
		</>
	);
};

AbilityEdit.propTypes = {

};

export default AbilityEdit;
