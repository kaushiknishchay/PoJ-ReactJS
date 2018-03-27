import React, {Component} from "react";
import {fetchData} from "../../fetch.service";
import ParallaxImageItem from "./ParallaxImageItem";
import {baseUrl} from "../../config.constants";

export default class ParallaxLayout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
	}

	componentWillMount() {
		fetchData.getRandom(3).then(res => {
			if (res.status === 200 && res.data) {
				this.setState({
					items: res.data
				});
			}
		});
	}

	renderParallax() {
		if (this.state.items.length > 0) {
			return `<div className="tp-fullscreen-container revolution">
						<div className="tp-fullscreen"><ul>` +

					this.state.items.map((item, idx) => {
						return (
								<ParallaxImageItem
										title={""}
										key={idx}
										description={""}
										src={baseUrl + item.toString().replace("/\\/g", "/")}/>);
					})
					+ `</ul><div className="tp-bannertimer tp-bottom"/></div></div>`;
		}
	}

	render() {
		return (
				<div>{this.renderParallax()}</div>
	)
	}

}
