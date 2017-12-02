import React, {Component} from "react";
import SpecialitiesItem from "./SpecialitiesItem";
import {fetchData} from "../../fetch.service";
import {baseUrl} from "../../config.constants";

export default class SpecialitiesComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			collectionList: [],
			error: false
		};
	}

	componentWillMount() {
		fetchData.getCollection()
				.then(res => {
					if (res.status === 200 && res.data) {
						console.log(res.data);
						this.setState({
							collectionList: res.data
						});
					} else {
						this.setState({
							error: true
						});
					}
				})
				.catch(err => {
					console.log(err);

					this.setState({
						error: true
					});
				});
	}

	render() {
		let wrapperclass = this.props.className + "-wrapper";
		let {collectionList} = this.state;
		return (
				<div className={wrapperclass}>
					<div className="container inner">
						<div className="thin">
							<h3 className="section-title text-center">{this.props.title}</h3>
							<p className="text-center">{this.props.description}</p>
						</div>
						<div className="divide10"/>
						<div className="row">
							{
								collectionList.map((col, idx) => {
									col.cover = baseUrl + col.cover;
									return (<SpecialitiesItem
											key={idx}
											colData={col}
											src={col.cover}
											title={col.name}/>);
								})
							}
						</div>
					</div>
				</div>
		)
	}
}
