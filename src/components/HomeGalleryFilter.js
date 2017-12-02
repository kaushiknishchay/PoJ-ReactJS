import React, {Component} from 'react';

export default class HomeGalleryFilter extends Component {
	render() {
		let style1= {"height": "65px"};
		let style2 = {"position": "fixed; top: 70px"};
		return (
				<div id="sticky-filter-sticky-wrapper" className="sticky-wrapper sfilter" style={style1}>
					<div id="sticky-filter" className="sticky-filter dark-wrapper container"
					     style={style2}>
						<ul>
							<li className="current"><a href="#Hello1">Hello1</a></li>
							<li className=""><a href="#Hello2">Hello2</a></li>
						</ul>
					</div>
				</div>
		)
	}
}
