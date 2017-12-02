import React, {Component} from "react";

export default class AlbumSliderLayout extends Component {
	render() {
		return (
				<div className="slide-portfolio-item-content dark-wrapper slide-portfolio-item-1">
					<div className="slide-portfolio-item-detail">
						<div className="inner2">
							<h2 className="text-center">Coffee Time</h2>
							<p className="text-center">Cras mattis consectetur purus sit amet fermentum. Integer
								posuere
								erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at
								lobortis. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere
								velit
								aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
							<div className="divide25"/>
							<ul className="basic-gallery text-center">
								<li><img src="style/images/art/sp1-1.jpg" alt=""/></li>
								<li><img src="style/images/art/sp1-2.jpg" alt=""/></li>
								<li><img src="style/images/art/sp1-3.jpg" alt=""/></li>
								<li><img src="style/images/art/sp1-4.jpg" alt=""/></li>
								<li><img src="style/images/art/sp1-5.jpg" alt=""/></li>
							</ul>
						</div>
					</div>
				</div>
		)
	}
}
