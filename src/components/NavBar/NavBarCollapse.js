import React, {Component} from 'react';
import NavBarDropDown from "./NavBarDropDown";

export default class NavBarCollapse extends Component {
	render() {
		return (
				<nav className="collapse navbar-collapse">
					<ul className="nav navbar-nav">
						<NavBarDropDown active="true"/>
					</ul>
				</nav>
		)
	}
}
