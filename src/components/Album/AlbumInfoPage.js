import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {fetchData} from "../../fetch.service";
import {baseUrl} from "../../config.constants";

class AlbumInfoPage extends Component {

	componentWillMount() {
		let pMatch = this.props.match;

		if (pMatch !== undefined && pMatch.params !== undefined && pMatch.params.albumKey !== "") {
			fetchData.getAlbum(this.props.match.params.albumKey)
					.then(res => {
						if (res.status === 200 && res.data) {
							this.setState({
								albumInfo: res.data
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
			albumInfo: {}
		};
	}

	render() {
		let wrapperclass = (this.props.className === undefined ? "dark" : this.props.classsName) + "-wrapper";
		let {albumInfo} = this.state;
		return (
				<div className={wrapperclass}>
					<div className="container inner2">
						<h2 className="post-title text-center">
							{albumInfo.name}
						</h2>
						<p className="text-center">
							{albumInfo.description}
						</p>
						<div className="divide30"/>
						<ul className="basic-gallery text-center">
							{albumInfo !== undefined && albumInfo['photo_url'] !== undefined &&
							JSON.parse(albumInfo['photo_url']).map((album, idx) => {
								album = baseUrl+album;
								return (<li key={idx}><img src={album} alt=""/></li>);
							})
							}
						</ul>
					</div>
				</div>
		)
	}
}

export default withRouter(AlbumInfoPage);