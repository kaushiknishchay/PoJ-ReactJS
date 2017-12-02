import React, {Component} from 'react';
import RecentWorksItem from "./RecentWorksItem";

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
								<RecentWorksItem id="title-1" title="Ubi est dexter devatio?" description="Arrr, stormy greed!"
								                 src="images/art/p1.jpg"
								                 srcFull="images/art/p1-full.jpg"/>
								<RecentWorksItem id="title-2" title="Ubi est dexter devatio?" description="Arrr, stormy greed!"
								                 src="images/art/p3.jpg"
								                 srcFull="images/art/p3-full.jpg"/>
								<RecentWorksItem id="title-3" title="Ubi est dexter devatio?" description="Arrr, stormy greed!"
								                 src="images/art/p2.jpg"
								                 srcFull="images/art/p2-full.jpg"/>
							</div>
						</div>
						<div className="divide30"/>
					</div>
				</div>
		)
	}
}
