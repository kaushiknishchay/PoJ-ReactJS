import React, {Component} from 'react';

export default class ParallaxImageItem extends Component {
	render() {
		return (
				<li data-transition="fade">
					<img src={this.props.src} alt="" data-bgposition="center top" data-bgfit="cover"
					     data-bgrepeat="no-repeat"/>
					<h1 className="tp-caption large sfr" data-x="30" data-y="263" data-speed="900" data-start="800" data-easing="Sine.easeOut">
						{this.props.title}
					</h1>
					<div className="tp-caption medium sfr" data-x="30" data-y="348" data-speed="900" data-start="1500" data-easing="Sine.easeOut">
						{this.props.description}
					</div>
				</li>
		)
	}
}
