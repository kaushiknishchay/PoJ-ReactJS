import React, {Component} from "react";
import ParallaxImageItem from "./ParallaxImageItem";
import ParallaxVideoItem from "./ParallaxVideoItem";
import {PARALLAX_ARRAY} from "../../config.constants";

export default class ParallaxLayout extends Component {
	render() {
		return (
				<div className="tp-fullscreen-container revolution">
					<div className="tp-fullscreen">
						<ul>
							{PARALLAX_ARRAY.map((item, idx) => {
								if (item.isVideo) {
									return (
											<ParallaxVideoItem
													title={item.title}
													key={idx}
													description={item.description}
													src={item.image_src}
													videosrc={item.video_src}/>
									);
								} else {
									return (
											<ParallaxImageItem
													title={item.title}
													key={idx}
													description={item.description}
													src={item.image_src}/>);

								}
							})}

						</ul>
						<div className="tp-bannertimer tp-bottom"/>
					</div>
				</div>
		)
	}
}
