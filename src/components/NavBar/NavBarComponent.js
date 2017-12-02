import React, {Component} from "react";
import "../../styles/navbar.css";
import NavBarCollapse from "./NavBarCollapse";
import SocialIconsHeader from "./SocialIconsHeader";
import {Link} from "react-router-dom";

export default class NavBar extends Component {
	render() {

		return (
				<div className="navbar solid">
					<div className="navbar-header">
						<div className="basic-wrapper">
							<div className="navbar-brand">
								<Link to="/">
									<img src="#"
									     srcSet="images/logo.png 1x, images/logo@2x.png 2x"
									     className="logo-light" alt=""/>
									<img src="#" srcSet="images/logo-dark.png 1x, images/logo-dark@2x.png 2x"
									     className="logo-dark" alt=""/>
								</Link>
							</div>
							<a className="btn responsive-menu" data-toggle="collapse" data-target=".navbar-collapse">
								<i>&nbsp;</i>
							</a>
						</div>
					</div>
					<NavBarCollapse/>
					<SocialIconsHeader/>
				</div>
		);

	}
}