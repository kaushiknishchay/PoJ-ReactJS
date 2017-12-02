import React, {Component} from "react";
import {baseUrl} from "../../config.constants";
import {Link} from "react-router-dom";

export default class AlbumItem extends Component {
	render() {
		let {albumData} = this.props;
		return (
				<li className="item">
					<figure className="icon-overlay">
						<Link to={"/album/" + albumData.albumkey + "/" + albumData.slug}>
							<span className="icn-more"/>
							<img alt="imagesartpf1.jpg" src={baseUrl + albumData.thumb_url}/>
						</Link>
					</figure>
					<div className="slide-portfolio-item-info box">
						<h4 className="post-title">{albumData.name}</h4>
					</div>
				</li>
		)
	}
}
