import React, {useState, useCallback, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import FooterEdit from './FooterEdit';
import { AEC } from '../../css/styledEdit';
import { EditAttr, AttrName, AttrContent} from '../../css/styledEdit'
import { Cancel } from '@material-ui/icons'

const usePrevious = (value) => {
	// The ref object is a generic container whose current property is mutable ...
	// ... and can hold any value, similar to an instance property on a class
	const ref = useRef();

	// Store current value in ref
	useEffect(() => {
	  ref.current = value;
	}, [value]); // Only re-run if value changes

	// Return previous value (happens before update in useEffect above)
	return ref.current;
  }

const Attr = ({ name, data }) => {
	return (
		<EditAttr>
			<AttrName>
				{name}
			</AttrName>
			<AttrContent>
				{data}
			</AttrContent>
		</EditAttr>
	);
}

const ListAbil = ({ index, ActivateTab, ActiveTab, data }) => {
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
						<Attr name="attribute name" data={data.title} />
						<EditAttr>
							<AttrName style={{background: 'rgb(30, 30, 30)'}}>attribute list</AttrName>
							<div className="list-wrapper">
								{data.list.map((c, i) => {
									return (
										<div className="list-attribute" key={(i)}>
											<div>
												{c.content}
											</div>
											<button className='attrDelbtn'>
												<Cancel />
											</button>
										</div>
									);
								})}
							</div>
						</EditAttr>
					</AEC>
				</div>
			</ul>
		</div>
	);
}

const AbilityEdit = ({ data }) => {
	const [currentIndex, setIndex] = useState(-1);

	// const prevIndex = usePrevious(currentIndex);

	const ActivateTab = (index) => {
		if (currentIndex === index){
			setIndex(-1);
		} else {
			setIndex(index);
		}
	}

	console.log(currentIndex);

	return (
		<>
			{data.abilities.content.map((c, i) => {
				return (
					<ListAbil key={(c.id)} index={i} ActiveTab={currentIndex} ActivateTab={ActivateTab.bind(null, i)} data={c} />
				);
			})}
		</>
	);
};

AbilityEdit.propTypes = {

};

export default AbilityEdit;
