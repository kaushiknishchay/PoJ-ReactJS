import React, {Component} from "react";
import ParallaxLayout from "./Parallax/ParallaxLayout";
import SpecialitiesComponent from "./Specialities/SpecialitiesComponent";
import RecentWorks from "./RecentWorks/RecentWorks";
import {RECENTWORKS_DESC, RECENTWORKS_TITLE, SPECIALITY_DESC, SPECIALITY_TITLE} from "../config.constants";
import {fetchData} from "../fetch.service";

export default class HomePage extends Component {


	constructor(props) {
		super(props);

		this.state = {
			randomWorks: []
		};
	}

	componentWillMount() {

		fetchData.getRandom().then(res => {
			if (res.status === 200 && res.data) {
				this.setState({
					randomWorks: res.data
				});
			}
		});
	}

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
							randomWorks={this.state.randomWorks}
							description={RECENTWORKS_DESC}/>
				</div>
		)
	}
}
