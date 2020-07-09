import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Title, Description, Subtitles, AlternateEmail, ContactPhone, Code, Comment } from '@material-ui/icons';

import {useSetInput} from './BlogManage';

const RevisePortfolio = props => {
	const { data } = useSelector(state=>state.portfolio);

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

	let isChanged = true;

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
		</>
	);
};

RevisePortfolio.propTypes = {

};

export default RevisePortfolio;
