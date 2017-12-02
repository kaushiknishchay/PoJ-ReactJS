import React, {Component} from "react";
import ParallaxLayout from "./Parallax/ParallaxLayout";
import SpecialitiesComponent from "./Specialities/SpecialitiesComponent";
import RecentWorks from "./RecentWorks/RecentWorks";
import {RECENTWORKS_DESC, RECENTWORKS_TITLE, SPECIALITY_DESC, SPECIALITY_TITLE} from "../config.constants";

export default class HomePage extends Component {
	render() {
		return (
				<div className="homepage">
					<ParallaxLayout/>

					<SpecialitiesComponent
							className="light"
							title={SPECIALITY_TITLE}
							description={SPECIALITY_DESC}/>

					<RecentWorks
							className="dark"
							title={RECENTWORKS_TITLE}
							description={RECENTWORKS_DESC}/>
				</div>
		)
	}
}
