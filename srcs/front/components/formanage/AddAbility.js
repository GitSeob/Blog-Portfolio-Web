import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Send, AddCircle, Title, } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import {
	ABILITY_ADD_REQUEST,
} from '../../reducers/portfolio';
import {useSetInput} from './BlogManage';

const AddAbility = ({ addAbilName, OCAddAbilName, cancelAddAbil }) => {
	const [addAttr, setAddAttr] = useState(false);
	const [attrList, setAttrList] = useState([]);
	const [attrName, setAttrName, OCAttrName] = useSetInput('');

	const dispatch = useDispatch();

	const [inputStatus, setInputStatus] = useState('');

	const openAddAttr = useCallback((e) => {
		e.preventDefault();
		if (addAbilName === '') {
			setInputStatus('타이틀을 입력하세요.');
			return ;
		}
		if (addAttr) {
			setAddAttr(false);
		} else {
			setAddAttr(true);
		}
	}, [inputStatus, addAttr, addAbilName]);

	const onAddAttr = useCallback((e) => {
		e.preventDefault();
		if (attrName === '') {
			return ;
		}
		const tempArray = new Array();
		attrList.map((c) => {
			tempArray.push(c);
		})
		tempArray.push(attrName);
		setAttrList(tempArray);
		setAttrName('');
	})

	const removeAbilAttr = useCallback((i) => (e) => {
		e.preventDefault();
		const tempArray = [...attrList];
		tempArray.splice(i, 1);
		setAttrList(tempArray);
	}, [attrList]);

	const onSubmitAbility = useCallback((e) => {
		e.preventDefault();

		if (attrList.length > 0) {
			if (confirm('Ability를 추가하시겠습니까?')) {
				const containAttr = new Array();
				attrList.map(c => {
					containAttr.push({
						list_attribute: c,
					})
				});
				dispatch({
					type: ABILITY_ADD_REQUEST,
					data: {
						title: addAbilName,
						list: containAttr,
					}
				})
			}
		} else {
			alert('요소를 하나 이상 추가하십시오.');
		}
	}, [attrList])

	return (
		<>
		<form className="manage-bundle-list add-cate-attr">
			{ !addAttr ?
				<>
				<Title style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
				<span>
					<input className="add-cate-ipt" type="text" value={addAbilName} onChange={OCAddAbilName} placeholder="ABILITY 이름을 입력해주세요." required/>
					{inputStatus !== '' &&
						<span className="ipt-title-error">
							{inputStatus}
						</span>
					}
				</span>
				<div className="manage-btn-container" style={{display: 'block'}}>
					<button type='reset' className="manage-cate-btn" onClick={cancelAddAbil}>
						취소
					</button>
					<button className="manage-cate-btn" onClick={openAddAttr}>
						요소들 추가하기
					</button>
				</div>
				</>
				:
				<>
				<Title style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
					<div className="manage-add-attr-title" >
						{addAbilName}
						<button type='reset' className="manage-cate-btn" onClick={cancelAddAbil}>
							취소
						</button>
					</div>
					<div className="manage-add-attr">
						{ attrList.map((c, i) => {
							return (
								<div key={(i)} className="add-attr-bubble">
									<div className="manage-add-attr-name">
										{c}
									</div>
									<button onClick={removeAbilAttr(i)}>
										<Cancel />
									</button>
								</div>
							);
						})}
						<div className="add-attr-bubble">
							<input type='text' className="manage-add-attr-ipt" value={attrName} onChange={OCAttrName} />
							<button onClick={onAddAttr}>
								<AddCircle/>
							</button>
						</div>
					</div>
				<button onClick={onSubmitAbility} className="add-abil-submit-btn">
					<Send />
				</button>
				</>
			}
		</form>
		</>
	)
}

export default AddAbility;
