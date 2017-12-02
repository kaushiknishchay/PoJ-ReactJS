import React, {Component} from "react";
import AlbumItem from "./AlbumItem";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {collection} from "../../actions/collection.action";
import LoadingBar from "../LoadingBar";

class AlbumPage extends Component {

	componentWillMount() {
		let pMatch = this.props.match;
		if (pMatch !== undefined && pMatch.params !== undefined && pMatch.params.colKey !== "" && pMatch.params.colSlug !== undefined) {
			this.props.getCollectionAlbumsList(pMatch.params.colKey)
		} else {
			this.props.history.push(`/`);
		}
	}


	render() {
		let wrapperclass = (this.props.className === undefined ? "dark" : this.props.classsName) + "-wrapper";

		let {collectionInfo} = this.props;
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
									{this.renderAlbums()}
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

	renderAlbums() {
		if (this.props.collectionInfo.albums) {
			return this.props.collectionInfo['albums'].map((album, idx) => {
				return (<AlbumItem key={idx} albumData={album}/>);
			})
		} else {
			return (<LoadingBar />)
		}
	}
}

function mapStateToProps(state) {
	let col = state.collectionReducer;
	return {
		collectionInfo: col.collectionInfo,
		collectionInfoError: col.collectionInfoError
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getCollectionAlbumsList: collection.getCollectionAlbumsList
	}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumPage));