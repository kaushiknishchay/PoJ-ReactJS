import React, {Component} from "react";
import {CONTACT_INFO, Social_Urls} from "../config.constants";

export default class FooterComponent extends Component {
	render() {
		// let footLink = {"color": "#fff"};
		let {insta, fb, twitter} = Social_Urls;
		return (
				<footer className="footer inverse-wrapper">
					<div className="container inner">
						<div className="row">
							<div className="col-sm-4">
								<div className="widget">
									<h3 className="widget-title">Social Media</h3>
									<ul className="social">
										<li>
											<a href={insta}>
												<i className="icon-s-instagram"/>
											</a>
										</li>
										<li>
											<a href={twitter}>
												<i className="icon-s-twitter"/>
											</a>
										</li>
										<li>
											<a href={fb}>
												<i className="icon-s-facebook"/>
											</a>
										</li>
										{/*<li>*/}
										{/*<a href={pinterest}>*/}
										{/*<i className="icon-s-pinterest"/>*/}
										{/*</a>*/}
										{/*</li>*/}
										{/*<li>*/}
										{/*<a href={linkedin}>*/}
										{/*<i className="icon-s-linkedin"/>*/}
										{/*</a>*/}
										{/*</li>*/}
									</ul>
								</div>
							</div>

							<div className="col-sm-4">
								<div className="widget">

								</div>

							</div>

							<div className="col-sm-4">

								<div className="widget">
									<h4 className="widget-title">Get In Touch</h4>
									<p>{CONTACT_INFO.info}</p>
									<div className="contact-info">
										<i className="icon-location"/> {CONTACT_INFO.location}<br/>
										<i className="icon-phone"/>{CONTACT_INFO.phone}<br/>
										<i className="icon-mail"/> <a
											href={"mailto:" + CONTACT_INFO.email + "?"}>{CONTACT_INFO.email}</a>
									</div>
								</div>

							</div>

						</div>
					</div>

					<div className="sub-footer">
						<div className="container inner">
							<p className="text-center">© {(new Date()).getFullYear()} Pictures Of Joy. All rights reserved.
							</p>
						</div>
					</div>
				</footer>
		)
	}
}
