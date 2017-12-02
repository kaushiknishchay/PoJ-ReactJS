import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {baseUrl} from "../../config.constants";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {album} from "../../actions/album.action";
import LoadingBar from "../LoadingBar";

class AlbumInfoPage extends Component {

	componentWillMount() {
		let pMatch = this.props.match;

		if (pMatch !== undefined && pMatch.params !== undefined && pMatch.params.albumKey !== "" && pMatch.params.albumSlug !== undefined) {
			this.props.getAlbum(pMatch.params.albumKey);
		} else {
			this.props.history.push(`/`);
		}
	}

	renderPictures() {
		if (this.props.albumInfo !== undefined && this.props.albumInfo['photo_url'] !== undefined) {
			return JSON.parse(this.props.albumInfo['photo_url']).map((album, idx) => {
				album = baseUrl + album;
				return (<li key={idx}><img src={album} alt=""/></li>);
			})
		} else if (this.props.albumInfoError) {
			return (<div>Can't load album info.</div>)
		} else {
			return (<LoadingBar />);
		}
	}

	render() {
		let wrapperclass = (this.props.className === undefined ? "dark" : this.props.classsName) + "-wrapper";
		let {albumInfo} = this.props;
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
							{this.renderPictures()}
						</ul>
					</div>
				</div>
		)
	}


	componentWillUnmount() {
		this.props.cleanUp();
	}
}
function mapStateToProps(state) {
	let album = state.albumReducer;
	return {
		albumInfo: album.albumInfo,
		albumInfoError: album.albumInfoError
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getAlbum: album.getAlbumInfo,
		cleanUp: album.cleanUp
	}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumInfoPage));