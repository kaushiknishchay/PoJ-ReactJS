import React, {Component} from "react";
import RecentWorksItem from "./RecentWorksItem";
import {baseUrl} from "../../config.constants";

export default class RecentWorks extends Component {


	render() {
		let wrapperclass = this.props.className + "-wrapper";
		return (
				<div className={wrapperclass}>
					<div className="container inner">
						<div className="thin">
							<h3 className="section-title text-center">{this.props.title}</h3>
							<p className="text-center">{this.props.description}</p>
						</div>
						<div className="divide10"/>
						<div className="cbp-panel">
							<div id="js-grid-mosaic" className="cbp">
								{this.renderRecent()}
							</div>
						</div>
						<div className="divide30"/>
					</div>
				</div>
		)
	}

	renderRecent() {
		if (this.props.randomWorks && this.props.randomWorks.length > 0) {
			return this.props.randomWorks.map((image, idx) => {
				let img = baseUrl + image;
				return (
						<RecentWorksItem key={idx + "recent"} title={idx + "recent"}
			                 src={img}
			                 srcFull={img}/>)
			});
		}
	}
}
