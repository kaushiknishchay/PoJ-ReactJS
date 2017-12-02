import React, {Component} from "react";
import SpecialitiesItem from "./SpecialitiesItem";
import {baseUrl} from "../../config.constants";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {collection} from "../../actions/collection.action";
import LoadingBar from "../LoadingBar";

class SpecialitiesComponent extends Component {

	componentWillMount() {
		this.props.getCollectionList();
	}

	renderSpecialities() {
		if (this.props.collectionList) {
			return this.props.collectionList.map((col, idx) => {
				col.cover = baseUrl + col.cover;
				return (<SpecialitiesItem
						key={idx}
						colData={col}
						src={col.cover}
						title={col.name}/>);
			})
		} else if (this.props.collectionListError) {
			return (<div>Can't get data. Try reloading the page. {this.props.collectionListError}</div>)
		} else {
			return (<LoadingBar/>);
		}
	}

	render() {
		let wrapperclass = this.props.className + "-wrapper";

		return (
				<div className={wrapperclass}>
					<div className="container inner">
						<div className="thin">
							<h3 className="section-title text-center">
								{this.props.title}
							</h3>
							<p className="text-center">
								{this.props.description}
							</p>
						</div>
						<div className="divide10"/>
						<div className="row">
							{this.renderSpecialities()}
						</div>
					</div>
				</div>
		)
	}


}

function mapStateToProps(state) {
	let col = state.collectionReducer;
	return {
		collectionList: col.collectionList,
		collectionListError: col.collectionListError
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getCollectionList: collection.getCollections
	}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SpecialitiesComponent);