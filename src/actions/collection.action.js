import {fetchData} from "../fetch.service";
import {actionConstants} from "./action.constants";

export const collection = {
	getCollections,
	getCollectionAlbumsList,
};

function getCollections() {
	return dispatch => {
		fetchData.getCollection().then(res => {
			if (res.status === 200 && res.data) {
				dispatch(success(res.data));
			} else {
				dispatch(error(res.data));
			}
		}).catch(err => {
			dispatch(error(err));
		});
	};

	function success(data) {
		return {
			type: actionConstants.GET_COLLECTION_SUCCESS,
			data: data
		}
	}

	function error(data) {
		return {
			type: actionConstants.GET_COLLECTION_ERROR,
			data: data
		}
	}
}

function getCollectionAlbumsList(colKey) {
	return dispatch => {
		fetchData.getCollection("/" + colKey)
				.then(res => {
					if (res.status === 200 && res.data)
						dispatch(success(res.data));
					else
						dispatch(error(res.data));
				})
				.catch(err => {
					dispatch(error(err));

				});
	};
	function success(data) {
		return {
			type: actionConstants.GET_COLLECTION_ALBUM_SUCCESS,
			data: data
		}
	}

	function error(data) {
		return {
			type: actionConstants.GET_COLLECTION_ALBUM_ERROR,
			data: data
		}
	}
}

