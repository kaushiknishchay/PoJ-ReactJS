import React, {Component} from 'react';

export default class RecentWorksItem extends Component {
	render() {
		return (
				<div className="cbp-item">
					<a className="cbp-caption fancybox-media" data-rel="portfolio" href={this.props.srcFull}
					   data-title-id={this.props.id}>
						<div className="cbp-caption-defaultWrap">
							<img src={this.props.src} alt=""/>
						</div>
						<div className="cbp-caption-activeWrap">
							<div className="cbp-l-caption-alignCenter">
								<div className="cbp-l-caption-body">
									<div className="cbp-l-caption-title"><span className="cbp-plus"/></div>
								</div>
							</div>
						</div>
					</a>
					<div id={this.props.id} className="hidden">
						<h3>{this.props.title}</h3>
						<p>{this.props.description}</p>
					</div>
				</div>
		)
	}
}
