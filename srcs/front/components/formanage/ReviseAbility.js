import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Send, AddCircle, Reorder, Add, Cancel } from '@material-ui/icons';

import AddAbility from './AddAbility';
import {
	ABILITY_DELETE_REQUEST,
	ABILITY_EDIT_REQUEST,
	ABILITY_EDIT_ONLY_ATTR_REQUEST,
	ABILITY_EDIT_ONLY_TITLE_REQUEST,
} from '../../reducers/portfolio';
import useSetInput from '../../hooks/useSetInput';

const ReviseAbility = props => {
	const { data } = useSelector(state=>state.portfolio);
	const dispatch = useDispatch();

	const [editAbilName, setEditAbilName, OCEditAbilName] = useSetInput('');
	// 어빌리티 타이틀 input에 필요한 state
	const [addAbilName, setAddAbilName, OCAddAbilName] = useSetInput('');
	// 어빌리티를 추가할 때 타이틀 input에 필요한 state
	const [editAbilList, setEditAbilList] = useState([]);
	// 어빌리티에 속하는 Attribute가 수정될 때 필요한 Array State
	const [attrName, setAttrName, OCAttrName] = useSetInput('');
	// 어빌리티에 속하는 Attribute를 추가할때 필요한 state,
	const [isEditAbilList, setIsEditAbilList] = useState(false);
	// 어빌리티에 속하는 Attribute가 수정되었는지 아닌지 확인하는 state

	const [openAddAbil, setOpenAddAbil] = useState(false);
	const [abilIndex, setAbilIndex] = useState(-1);
	const [eachAbOpened, setEachAbOpened] = useState(Array(data.Abilities.length).fill(false));

	const clickedCancelEditAbilBtn = useCallback((e) => {
		e.preventDefault();
		setAbilIndex(-1);
		setEachAbOpened(Array(eachAbOpened.length).fill(false));
		setEditAbilList([]);
		setIsEditAbilList(false);
		setAttrName('');
	});

	const selectAbility = useCallback((i, c) => (e) => {
		e.preventDefault();
		setAttrName('');
		setAbilIndex(-1);
		setIsEditAbilList(false);
		const tempArray = new Array();
		c.Ab_lists.map(c => {
			tempArray.push(c.list_attribute);
		})
		setEditAbilList(tempArray);
		setEachAbOpened(eachAbOpened.map((elem, idx) => {
			if (idx === i) {
				return true;
			} else {
				return false;
			}
		}));
	});

	const reClickedAbility = useCallback((e) => {
		e.preventDefault();
		setEachAbOpened(Array(eachAbOpened.length).fill(false));
	});

	const clickedAbilEditBtn = useCallback((i, c) => (e) => {
		e.preventDefault();
		setEachAbOpened(Array(eachAbOpened.length).fill(false));
		const tempArray = new Array();
		c.Ab_lists.map(c => {
			tempArray.push(c.list_attribute);
		})
		setEditAbilName(c.list_title);
		setIsEditAbilList(false);
		setEditAbilList(tempArray);
		setAttrName('');
		setAbilIndex(i);
	});

	const removeAbil = useCallback((c) => (e) => {
		e.preventDefault();
		if (confirm(`${c.list_title} 항목을 삭제하시겠습니까?`)) {
			dispatch({
				type: ABILITY_DELETE_REQUEST,
				id: c.id
			})
		}
	});

	const editAbilAttr = useCallback((i, c, ab_c) => (e) => {
		e.preventDefault();
		const temp = [...editAbilList];
		temp[i] = e.target.value;
		setEditAbilList(temp);
		setIsEditAbilList(true);
	}, [editAbilList]);

	const deleteAttr = useCallback((i, c) => (e) => {
		e.preventDefault();
		const tempArray = [...editAbilList];
		tempArray.splice(i, 1);
		setIsEditAbilList(true);
		setEditAbilList(tempArray);
	});

	const onAddAttr = useCallback((e) => {
		e.preventDefault();
		const temp = [...editAbilList];
		temp.push(attrName);
		setEditAbilList(temp);
		setIsEditAbilList(true);
		setAttrName('');
	}, [attrName, editAbilList]);

	const editAbil = useCallback((ab_c) => (e) => {
		e.preventDefault();
		let changeNameStatus = false;

		if (editAbilName !== ab_c.list_title) {
			changeNameStatus = true;
		}
		if (!isEditAbilList) {
			if (!changeNameStatus) {
				alert('변경된 정보가 없습니다.');
				return ;
			} else {
				if (confirm('Ability 정보를 수정하시겠습니까?')) {
					dispatch({
						type: ABILITY_EDIT_ONLY_TITLE_REQUEST,
						data: {
							ability_id: ab_c.id,
							title: editAbilName,
						}
					})
				}
			}
		}
		else {
			if (!changeNameStatus) {
				if (confirm('Ability 정보를 수정하시겠습니까?')) {
					const containAttr = new Array();
					editAbilList.map(c => {
						containAttr.push({
							list_attribute: c,
						});
					});
					dispatch({
						type: ABILITY_EDIT_ONLY_ATTR_REQUEST,
						data: {
							ability_id: ab_c.id,
							list: containAttr,
						}
					})
				}
			}
			else {
				if (confirm('Ability 정보를 수정하시겠습니까?')) {
					const containAttr = new Array();
					editAbilList.map(c => {
						containAttr.push({
							list_attribute: c,
						});
					});
					dispatch({
						type: ABILITY_EDIT_REQUEST,
						data: {
							ability_id: ab_c.id,
							title: editAbilName,
							list: containAttr,
						}
					})
				}
			}
		}
	}, [editAbilName, editAbilList, isEditAbilList]);

	const cancelAddAbil = useCallback((e) => {
		e.preventDefault();
		setOpenAddAbil(false);
		setAddAbilName('');
	}, [addAbilName]);

	const open_add_ability = useCallback((e) => {
		e.preventDefault();
		setOpenAddAbil(true);
	}, []);

	const close_add_ability = useCallback((e) => {
		e.preventDefault();
		setOpenAddAbil(false);
	}, []);

	return (
		<div className="manage-attr-wrap">
			<h3>ABILITY 관리</h3>
			<br/>
			<div className="manage-content-wrap">
				<strong>이곳에서 포트폴리오의 ABILITY 정보를 관리할 수 있습니다.</strong>
				<p>각 항목을 수정하거나 삭제, 추가할 수 있습니다.</p>
				<div className="manage-wrap-order">
					<div className="manage-list-order">
						{
							data.Abilities.map((ab_c, ab_i) => {
								return (
									<div key={(ab_i)}>
									<div className="manage-bundle-list" >
										<Reorder style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
										{ abilIndex === ab_i ?
										<>
											<form className="add-cate-container">
												<input className="add-cate-ipt" type="text" value={editAbilName} onChange={OCEditAbilName} required/>
												<div className="manage-btn-container">
													<button type='reset' className="manage-cate-btn" onClick={clickedCancelEditAbilBtn}>
														취소
													</button>
												</div>
											</form>
										</>
										:
										<>
											<button onClick={!eachAbOpened[ab_i] ? selectAbility(ab_i, ab_c) : reClickedAbility}>{ab_c.list_title}</button>
											<div className="manage-btn-container">
												<button className="manage-cate-btn" onClick={clickedAbilEditBtn(ab_i, ab_c)}>
													수정
												</button>
												<button className="manage-cate-btn" onClick={removeAbil(ab_c)}>
													삭제
												</button>
											</div>
										</>
										}
									</div>
									{
										(eachAbOpened[ab_i] || abilIndex === ab_i) &&
										<div className="manage-edit-abil">
										{ editAbilList.map((c, i) => {
											return (
												<div key={(i)} className="add-attr-bubble">
													{ abilIndex === ab_i ?
														<>
														<input type='text' value={editAbilList[i]} onChange={editAbilAttr(i, c, ab_c)} className="manage-add-attr-ipt" />
														<button onClick={deleteAttr(i, c)}>
															<Cancel />
														</button>
														</>
														:
														<div className="manage-add-attr-name">
															{c}
														</div>
													}
												</div>
											);
										})}
										{ abilIndex === ab_i &&
											<div className="add-attr-bubble">
												<input type='text' className="manage-add-attr-ipt" value={attrName} onChange={OCAttrName} />
												<button onClick={onAddAttr}>
													<AddCircle/>
												</button>
											</div>
										}
										{ abilIndex === ab_i &&
											<button className="add-abil-submit-btn" onClick={editAbil(ab_c)}>
												<Send />
											</button>
										}
										</div>
									}
									</div>
								);
							})
						}
						{openAddAbil &&
							<AddAbility addAbilName={addAbilName} OCAddAbilName={OCAddAbilName} cancelAddAbil={cancelAddAbil} />
						}
						<button className="manage-bundle-list" onClick={!openAddAbil ? open_add_ability : close_add_ability}>
							< Add style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}} />
							ABILITY 데이터 추가하기
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ReviseAbility.propTypes = {

};

export default ReviseAbility;
