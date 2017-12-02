import React, {Component} from 'react';

export default class HomeGalleryItem extends Component {
	render() {
		return (
				<div className="cbp-item">
					<a className="cbp-caption fancybox-media" data-rel="portfolio" href="images/art/pf6-full.jpg">
						<div className="cbp-caption-defaultWrap">
							<img src="images/art/pf6.jpg" alt=""/>
						</div>
						<div className="cbp-caption-activeWrap">
							<div className="cbp-l-caption-alignCenter">
								<div className="cbp-l-caption-body">
									<div className="cbp-l-caption-title">
										<span className="cbp-plus"></span>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
		)
	}
}
