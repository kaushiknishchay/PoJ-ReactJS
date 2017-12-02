import React, {Component} from 'react';
import HomeGalleryItem from "./HomeGalleryItem";

export default class HomeGallerySection extends Component {
	render() {
		return (
				<section id={this.props.title} className="light-wrapper">
					<div className="container inner">
						<h3 className="section-title text-center">{this.props.title}</h3>
						<p className="text-center">{this.props.desc}</p>
						<div className="divide20"></div>
						<div className="cbp-panel">
							<div className="cbp cbp-onepage-grid">
								<HomeGalleryItem/>
							</div>
						</div>
					</div>
				</section>
		)
	}
}
