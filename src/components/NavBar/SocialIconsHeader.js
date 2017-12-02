import React, {Component} from "react";
import {Social_Urls} from "../../config.constants";

export default class SocialIconsHeader extends Component {
	render() {
		let {insta, fb, twitter, linkedin} = Social_Urls;

		return (
				<div className="social-wrapper">
					<ul className="social naked">
						<li><a href={fb}><i className="icon-s-facebook"/></a></li>
						<li><a href={twitter}><i className="icon-s-twitter"/></a></li>
						<li><a href={linkedin}><i className="icon-s-linkedin"/></a></li>
						<li><a href={insta}><i className="icon-s-instagram"/></a></li>
					</ul>
				</div>
		)
	}
}
