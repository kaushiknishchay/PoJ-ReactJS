import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class NavBarDropDown extends Component {
	render() {
		let cl = this.props.active ? "current dropdown" : "dropdown";
		return (
				<li className={cl}>
					<Link to={"/"} className="">
						Home
					</Link>
					{/*<ul className="dropdown-menu">*/}
						{/*{this.props.children}*/}
					{/*</ul>*/}
				</li>
		);
	}
}
