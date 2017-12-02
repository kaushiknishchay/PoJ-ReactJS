import React, {Component} from "react";

export default class ParallaxVideoItem extends Component {
	render() {
		let zStyle1 = {zIndex: 1};
		let zStyle = {zIndex: 2};
		return (
				<li data-transition="fade">
					<img src={this.props.src} alt="" data-bgfit="cover" data-bgposition="center top"
					     data-bgrepeat="no-repeat"/>
					<div className="tp-caption large text-center sfb" data-x="center" data-y="293" data-speed="900"
					     data-start="800" data-endspeed="100" data-easing="Sine.easeOut" style={zStyle}>
						{this.props.title}
					</div>
					<div className="tp-caption medium text-center sfb" data-x="center" data-y="387" data-speed="900"
					     data-start="1500" data-endspeed="100" data-easing="Sine.easeOut" style={zStyle}>
						{this.props.description}
					</div>
					<div className="tp-caption tp-fade fadeout fullscreenvideo"
					     data-x="0"
					     data-y="0"
					     data-speed="1000"
					     data-start="1100"
					     data-easing="Power4.easeOut"
					     data-elementdelay="0.01"
					     data-endelementdelay="0.1"
					     data-endspeed="1500"
					     data-endeasing="Power4.easeIn"
					     data-autoplay="true"
					     data-autoplayonlyfirsttime="false"
					     data-nextslideatend="true"
					     data-dottedoverlay="twoxtwo"
					     data-volume="mute" data-forcecover="1" data-aspectratio="16:9" data-forcerewind="on"
					     style={zStyle1}>
						<video className="" preload="none" width="100%" height="100%"
						       poster={this.props.src}>
							<source src={this.props.videosrc} type='video/mp4'/>
						</video>
					</div>
				</li>
		)
	}
}
