import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

class SpecialitiesItem extends Component {

	render() {
		let {colData} = this.props;
		return (
				<div className="col-sm-4">
					<div className="caption-overlay">
						<figure>
							<Link to={"collection/" + colData.colkey + "/" + colData.slug}>
								<img src={this.props.src} alt=""/>
							</Link>
						</figure>
						<div className="caption bottom-right">
							<div className="title">
								<h3 className="main-title layer">{this.props.title}</h3>
							</div>
						</div>
					</div>
				</div>
		)
	}
}
export default withRouter(SpecialitiesItem);