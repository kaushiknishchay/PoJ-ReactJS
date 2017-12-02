import React, {Component} from "react";
import AlbumItem from "./AlbumItem";
import {withRouter} from "react-router-dom";
import {fetchData} from "../../fetch.service";

class AlbumPage extends Component {

	componentWillMount() {
		let pMatch = this.props.match;

		if (pMatch !== undefined && pMatch.params !== undefined && pMatch.params.colKey !== "") {
			fetchData.getCollection("/" + this.props.match.params.colKey)
					.then(res => {
						if (res.status === 200 && res.data) {
							this.setState({
								collectionInfo: res.data
							});
							console.log(res.data);
						}

					})
					.catch(err => {
						console.log(err);
					});
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			collectionInfo: {}
		};
	}

	render() {
		let wrapperclass = (this.props.className === undefined ? "dark" : this.props.classsName) + "-wrapper";

		let {collectionInfo} = this.state;
		return (
				<div className={wrapperclass}>
					<div className="container inner2">
						<h3 className="section-title text-center">
							{collectionInfo.name}
						</h3>
						<p className="text-center">
							{collectionInfo.description}
						</p>
						<div className="divide30"/>
						<div id="slide-portfolio"
						     className="image-grid col3">
							<div className="items-wrapper">
								<ul className="isotope items">
									{collectionInfo.albums !== undefined &&
									collectionInfo['albums'].map((album, idx) => {
										return (<AlbumItem key={idx} albumData={album}/>);
									})
									}
								</ul>
								{collectionInfo.albums !== undefined && collectionInfo.albums.length === 0 &&
								<div className="panelMargin"><h2>No Albums yet.</h2></div>
								}
							</div>
						</div>
					</div>

				</div>
		)
	}
}

export default withRouter(AlbumPage);