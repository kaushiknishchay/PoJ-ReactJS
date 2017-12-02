import React, {Component} from "react";
import {Social_Urls} from "../config.constants";

export default class FooterComponent extends Component {
	render() {
		let footLink = {"color": "#fff"};
		let {insta, fb, twitter, pinterest, linkedin} = Social_Urls;
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
										<li>
											<a href={pinterest}>
												<i className="icon-s-pinterest"/>
											</a>
										</li>
										<li>
											<a href={linkedin}>
												<i className="icon-s-linkedin"/>
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-sm-4">
								<div className="widget">
									{/*<h4 className="widget-title">Tags</h4>*/}
									{/*<ul className="tag-list">*/}
									{/*<li><a href="#" className="btn">Web</a></li>*/}
									{/*<li><a href="#" className="btn">Photography</a></li>*/}
									{/*<li><a href="#" className="btn">Illustation</a></li>*/}
									{/*<li><a href="#" className="btn">Fun</a></li>*/}
									{/*<li><a href="#" className="btn">Blog</a></li>*/}
									{/*<li><a href="#" className="btn">Commercial</a></li>*/}
									{/*<li><a href="#" className="btn">Journal</a></li>*/}
									{/*<li><a href="#" className="btn">Nature</a></li>*/}
									{/*<li><a href="#" className="btn">Still Life</a></li>*/}
									{/*</ul>*/}
								</div>

							</div>

							<div className="col-sm-4">

								<div className="widget">
									<h4 className="widget-title">Get In Touch</h4>
									<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
										fermentum massa.</p>
									<div className="contact-info">
										<i className="icon-location"/> Mumbai <br/>
										<i className="icon-phone"/> +91-789456123 <br/>
										<i className="icon-mail"/> <a
											href="first.last@email.com">first.last@email.com</a>
									</div>
								</div>

							</div>

						</div>
					</div>

					<div className="sub-footer">
						<div className="container inner">
							<p className="text-center">© 2017 Pictures Of Joy. All rights reserved.
								Website by <a href="http://kaushik.tech" style={footLink}>Kaushik.Tech</a>.
							</p>
						</div>
					</div>
				</footer>
		)
	}
}
