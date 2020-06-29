import React, { useCallback, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Send, AddCircle, Subtitles, AlternateEmail, ContactPhone, Code, Comment, Reorder, Add, Title, Description, Cancel } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import {
	ABILITY_ADD_REQUEST,
} from '../../reducers/portfolio';
import {useSetInput} from './BlogManage';

const AddAbility = ({ addAbilName, OCAddAbilName, cancelAddAbil }) => {
	const [addAttr, setAddAttr] = useState(false);
	const [attrList, setAttrList] = useState([]);
	const [attrName, setAttrName, OCAttrName] = useSetInput('');

	const dispatch = useDispatch();

	const openAddAttr = useCallback((e) => {
		e.preventDefault();
		if (addAttr) {
			setAddAttr(false);
		} else {
			setAddAttr(true);
		}
	}, []);

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
				dispatch({
					type: ABILITY_ADD_REQUEST,
					data: {
						title: addAbilName,
						list: attrList,
					}
				})
			}
		} else {
			alert('요소를 하나 이상 추가하십시오.');
		}
	})

	return (
		<>
		<form className="manage-bundle-list add-cate-attr">
			{ !addAttr ?
				<>
				<Title style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
				<input className="add-cate-ipt" type="text" value={addAbilName} onChange={OCAddAbilName} placeholder="ABILITY 이름을 입력해주세요." required/>
				<div className="manage-btn-container">
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
						<div className="manage-add-attr-title">{addAbilName}</div>
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

const AddWork = ({ addWorkName, OCAddWorkName, cancelAddWork }) => {
	return (
		<>
		<form className="manage-bundle-list add-cate-container">
			<input className="add-cate-ipt" type="text" value={addWorkName} onChange={OCAddWorkName} placeholder="WORK 이름을 입력해주세요." required/>
			<div className="manage-btn-container">
				<button type='reset' className="manage-cate-btn" onClick={cancelAddWork}>
					취소
				</button>
				<button className="manage-cate-btn">
					테이블 행 추가하기
				</button>
			</div>
		</form>
		</>
	)
}

const PortManage = ({  }) => {
	const {
		data,
	} = useSelector(state=>state.portfolio);

	const [aboutTitleValue, setAboutTitleValue, OCAboutTitleValue] = useSetInput(data.about_title);
	const [aboutSubTitleValue, setAboutSubTitleValue, OCAboutSubTitleValue] = useSetInput(data.about_sub_title);
	const [aboutContentValue, setAboutContentValue, OCAboutContentValue] = useSetInput(data.about_content);
	const [abilityTitleValue, setAbilityTitleValue, OCAbilityTitleValue] = useSetInput(data.ability_title);
	const [abilitySubTitleValue, setAbilitySubTitleValue, OCAbilitySubTitleValue] = useSetInput(data.ability_sub_title);
	const [workTitleValue, setWorkTitleValue, OCWorkTitleValue] = useSetInput(data.work_title);
	const [workSubTitleValue, setWorkSubTitleValue, OCWorkSubTitleValue] = useSetInput(data.work_sub_title);
	const [emailValue, setEmailValue, OCEmailValue] = useSetInput(data.email);
	const [kakaoValue, setKakaoValue, OCKakaoValue] = useSetInput(data.kakao);
	const [githubURLValue, setGithubURLValue, OCGithubURLValue] = useSetInput(data.github);
	const [commentValue, setCommentValue, OCCommentValue] = useSetInput(data.comment);

	const [editAbilName, setEditAbilName, OCEditAbilName] = useSetInput('');
	const [editWorkName, setEditWorkName, OCEditWorkName] = useSetInput('');

	const [abilIndex, setAbilIndex] = useState(-1);
	const [openAddAbil, setOpenAddAbil] = useState(false);
	const [workIndex, setWorkIndex] = useState(-1);
	const [openAddWork, setOpenAddWork] = useState(false);

	const [addAbilName, setAddAbilName, OCAddAbilName] = useSetInput('');
	const [addWorkName, setAddWorkName, OCAddWorkName] = useSetInput('');

	const dispatch = useDispatch();

	let isChanged = true;

	const open_add_ability = useCallback((e) => {
		e.preventDefault();
		setOpenAddAbil(true);
	}, []);
	const close_add_ability = useCallback((e) => {
		e.preventDefault();
		setOpenAddAbil(false);
	}, []);

	const open_add_work = useCallback((e) => {
		e.preventDefault();
		setOpenAddWork(true);
	}, []);
	const close_add_work = useCallback((e) => {
		e.preventDefault();
		setOpenAddWork(false);
	}, []);

	const cancelAddAbil = useCallback((e) => {
		e.preventDefault();
		setOpenAddAbil(false);
		setAddAbilName('');
	}, [])

	const cancelAddWork = useCallback((e) => {
		e.preventDefault();
		setAddWorkName('');
		setOpenAddWork(false);
	}, [])

	const clickedCancelEditAbilBtn = useCallback((e) => {
		e.preventDefault();
		setAbilIndex(-1);
	})

	const clickedAbilEditBtn = useCallback((i, c) => (e) => {
		e.preventDefault();
		setEditAbilName(c.list_title);
		setAbilIndex(i);
	})

	const removeAbil = useCallback((i) => (e) => {
		e.preventDefault();
		console.log('remove abil');
	})

	const clickedCancelEditWorkBtn = useCallback((e) => {
		e.preventDefault();
		setWorkIndex(-1);
	})

	const clickedAbilWorkBtn = useCallback((i, c) => (e) => {
		e.preventDefault();
		setEditWorkName(c.proj_name);
		setWorkIndex(i);
	})

	const removeWork = useCallback((i) => (e) => {
		e.preventDefault();
		console.log('remove work');
	})


	return (
		<>
		<form>
			<div className="manage-attr-wrap">
				<h3>포트폴리오 데이터 관리</h3>
				<br />
				<div className="manage-content-wrap">
					<strong>이곳에서 포트폴리오 기존 정보를 관리할 수 있습니다.</strong>
					<p>프로젝트와 장, 단점 데이터를 제외한 데이터를 여기서 관리할 수 있습니다.</p>
					<div className="manage-wrap-order">
						<div className="manage-list-order">
							<div className="manage-blog-info">
								<Title style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
								<div className="manage-attr-name">
									ABOUT TITLE
								</div>
								<input type='text' value={aboutTitleValue} onChange={OCAboutTitleValue} required placeholder="About 페이지의 타이틀을 입력해주세요." className="manage-attr-content" />
							</div>
							<div className="manage-blog-info">
								<Subtitles style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
								<div className="manage-attr-name">
									ABOUT SUB TITLE
								</div>
								<input type='text' value={aboutSubTitleValue} onChange={OCAboutSubTitleValue} required placeholder="About 페이지의 서브 타이틀을 입력해주세요." className="manage-attr-content" />
							</div>
							<div className="manage-blog-info">
								<Description style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
								<div className="manage-attr-name">
									ABOUT SUB CONTENT
								</div>
								<textarea rows={5} value={aboutContentValue} onChange={OCAboutContentValue} required placeholder="About 페이지의 내용을 입력해주세요." className="manage-attr-content" />
							</div>
						</div>
						<div className="manage-list-order">
							<div className="manage-blog-info">
								<Title style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
								<div className="manage-attr-name">
									ABILITY TITLE
								</div>
								<input type='text' value={abilityTitleValue} onChange={OCAbilityTitleValue} required placeholder="Ability 페이지의 타이틀을 입력해주세요." className="manage-attr-content" />
							</div>
							<div className="manage-blog-info">
								<Subtitles style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
								<div className="manage-attr-name">
									ABILITY SUB TITLE
								</div>
								<input type='text' value={abilitySubTitleValue} onChange={OCAbilityTitleValue} required placeholder="Ability 페이지의 서브 타이틀을 입력해주세요." className="manage-attr-content" />
							</div>
						</div>
						<div className="manage-list-order">
							<div className="manage-blog-info">
								<Title style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
								<div className="manage-attr-name">
									WORK TITLE
								</div>
								<input type='text' value={workTitleValue} onChange={OCWorkTitleValue} required placeholder="Work 페이지의 타이틀을 입력해주세요." className="manage-attr-content" />
							</div>
							<div className="manage-blog-info">
								<Subtitles style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
								<div className="manage-attr-name">
									WORK SUB TITLE
								</div>
								<input type='text' value={workSubTitleValue} onChange={OCWorkSubTitleValue} required placeholder="Work 페이지의 서브 타이틀을 입력해주세요." className="manage-attr-content" />
							</div>
						</div>
						<div className="manage-list-order">
							<div className="manage-blog-info">
								<AlternateEmail style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
								<div className="manage-attr-name">
									E-mail
								</div>
								<input type='text' value={emailValue} onChange={OCEmailValue} required placeholder="Work 페이지의 타이틀을 입력해주세요." className="manage-attr-content" />
							</div>
							<div className="manage-blog-info">
								<ContactPhone style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
								<div className="manage-attr-name">
									Kakao Talk
								</div>
								<input type='text' value={kakaoValue} onChange={OCKakaoValue} required placeholder="Work 페이지의 서브 타이틀을 입력해주세요." className="manage-attr-content" />
							</div>
							<div className="manage-blog-info">
								<Code style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
								<div className="manage-attr-name">
									Github URL
								</div>
								<input type='text' value={githubURLValue} onChange={OCGithubURLValue} required placeholder="Work 페이지의 서브 타이틀을 입력해주세요." className="manage-attr-content" />
							</div>
							<div className="manage-blog-info">
								<Comment style={{position: 'absolute', left: 0, top: '10px',fontSize: "16px", color: "#B4BAC2", transform: 'translateX(50%)'}}/>
								<div className="manage-attr-name">
									Comment
								</div>
								<input type='text' value={commentValue} onChange={OCCommentValue} required placeholder="Work 페이지의 서브 타이틀을 입력해주세요." className="manage-attr-content" />
							</div>
						</div>
					</div>
					<div className="set_btn">
						{ isChanged ?
							<button type="button" className="btn_save">
								변경사항 저장
							</button>
							:
							<button disabled className="btn_not_allow">
								변경사항 저장
							</button>
						}
					</div>
				</div>
			</div>
		</form>
		<div className="manage-attr-wrap">
			<h3>ABILITY 관리</h3>
			<br/>
			<div className="manage-content-wrap">
				<strong>이곳에서 포트폴리오의 ABILITY 정보를 관리할 수 있습니다.</strong>
				<p>각 항목을 수정하거나 삭제, 추가할 수 있습니다.</p>
				<div className="manage-wrap-order">
					<div className="manage-list-order">
						{
							data.Abilities.map((c, i) => {
								return (
									<div key={(i)} className="manage-bundle-list" >
										<Reorder style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
										{ abilIndex === i ?
										<>
											<form className="add-cate-container">
												<input className="add-cate-ipt" type="text" value={editAbilName} onChange={OCEditAbilName} required/>
												<div className="manage-btn-container">
													<button type='reset' className="manage-cate-btn" onClick={clickedCancelEditAbilBtn}>
														취소
													</button>
													<button className="manage-cate-btn"
													//  onClick={submitEditAbil(i, c)}
													>
														수정
													</button>
												</div>
											</form>
										</>
										:
										<>
											{c.list_title}
											<div className="manage-btn-container">
												<button className="manage-cate-btn" onClick={clickedAbilEditBtn(i, c)}>
													수정
												</button>
												<button className="manage-cate-btn" onClick={removeAbil(i)}>
													삭제
												</button>
											</div>
										</>
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
		<div className="manage-attr-wrap">
			<h3>WORK 관리</h3>
			<br/>
			<div className="manage-content-wrap">
				<strong>이곳에서 포트폴리오의 WORK 정보를 관리할 수 있습니다.</strong>
				<p>각 항목을 수정하거나 삭제, 추가할 수 있습니다.</p>
				<div className="manage-wrap-order">
					<div className="manage-list-order">
						{
							data.Works.map((c, i) => {
								return (
									<div key={(i)} className="manage-bundle-list" >
										<Reorder style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
										{ workIndex === i ?
										<>
											<form className="add-cate-container">
												<input className="add-cate-ipt" type="text" value={editWorkName} onChange={OCEditWorkName} placeholder="WORK 이름을 입력해주세요." required/>
												<div className="manage-btn-container">
													<button type='reset' className="manage-cate-btn" onClick={clickedCancelEditWorkBtn}>
														취소
													</button>
													<button className="manage-cate-btn"
													//  onClick={submitEditAbil(i, c)}
													>
														수정
													</button>
												</div>
											</form>
										</>
										:
										<>
											{c.proj_name}
											<div className="manage-btn-container">
												<button className="manage-cate-btn" onClick={clickedAbilWorkBtn(i, c)}>
													수정
												</button>
												<button className="manage-cate-btn" onClick={removeWork(i)}>
													삭제
												</button>
											</div>
										</>
										}
									</div>
								);
							})
						}
						{openAddWork &&
							<AddWork addWorkName={addWorkName} OCAddWorkName={OCAddWorkName} cancelAddWork={cancelAddWork} />
						}
						<button className="manage-bundle-list" onClick={!openAddWork ? open_add_work : close_add_work}>
							< Add style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}} />
							WORK 데이터 추가하기
						</button>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

PortManage.propTypes = {

};

export default PortManage;

// data structure
//
// Portfolio
// about_title, about_sub_title, about_content
// ability_title, ability_sub_title
// work_title, work_sub_title
// email, github, kakao, comment

// Abilities
//  list_title

// Ab_lists
// list_attribute

//Works
// proj_name, description, content, period, members,
// category, repo
