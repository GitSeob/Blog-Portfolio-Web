import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {useSelector} from 'react-redux';
import style from 'styled-components';
import { Email, ChatBubbleOutline, Code, Web } from '@material-ui/icons';

const Footer = props => {
	const {data} = useSelector(state=>state.portfolio);

	return (
		<footer role="contentinfo" id="footer" className="l-footer">
				<div className="l-section-holder l-footer-holder footer-widget-group">
					<div id="credits" className="footer-widget">
						<h2 className="footer-heading">Credits</h2>
						<div className="footer-content">
							<ul className="credit-list">
								<li className="credit-item">
									<div className="credit-left">
										<span>Open Sans font</span>
									</div>
									<span className="sr-only">by</span>
									<span className="credit-right">
										Steve Matteson
									</span>
								</li>
								<li className="credit-item">
									<div className="credit-left">
										Quicksand font
									</div>
									<span className="sr-only">by</span>
									<span className="credit-right">
										Andrew Paglinawan
									</span>
								</li>
								<li className="credit-item">
									<div className="credit-left">
										Creative Outline
									</div>
									<span className="sr-only">by</span>
									<span className="credit-right">
										Gregor Cresnar
									</span>
								</li>
								<li className="credit-item">
									<div className="credit-left">
										Sass
									</div>
									<span className="sr-only">by</span>
									<span className="credit-right">
										Hampton Catlin, Natalie Weizenbaum, Chris Eppstein and MIT
									</span>
								</li>
								<li className="credit-item">
									<div className="credit-left">
										Compass
									</div>
									<span className="sr-only">by</span>
									<span className="credit-right">
										Christopher M.Eppstein
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div id="contacts" className="footer-widget">
						<h2 className="footer-heading">Contacts</h2>
						<div className="footer-content">
							<ul className="unstyled-list">
								<li>
									<Email/>
									<span title="이메일">
										<span className="iconed-text" >{data.email}</span>
									</span>
								</li>
								<li>
									<ChatBubbleOutline/>
									<span title="카카오톡">
										<span className="iconed-text">{data.kakao}@Kakao Talk</span>
									</span>
								</li>
								<li>
									<Code/>
									<span title="깃허브">
										<a href={data.github} target="_blank" className="iconed-text">gitHub account</a>
									</span>
								</li>
								<li>
									<Web/>
									<span title="블로그">
										<a href='/' target="_blank" className="iconed-text">anjoy's Blog</a>
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div id="footerBase">
					<div className="l-section-holder l-footer-holder">
						미래 건물주 안홍섭
					</div>
				</div>
			</footer>
	);
};

const Linked = style.a`
	margin-left: 10px;
	text-decoration: none;
	font-size: 30pt;
	font-weight: 600;

	&:visited {
		color: black;
	}
`;

Footer.propTypes = {

};

export default Footer;
