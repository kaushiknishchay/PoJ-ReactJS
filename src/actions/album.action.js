import {fetchData} from "../fetch.service";
import {actionConstants} from "./action.constants";

export const album = {
	getAlbumInfo,
	cleanUp
};

function getAlbumInfo(albumKey) {
	return dispatch => {
		fetchData.getAlbum(albumKey).then(res => {
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
			type: actionConstants.GET_ALBUM_INFO_SUCCESS,
			data: data
		}
	}

	function error(data) {
		return {
			type: actionConstants.GET_ALBUM_INFO_ERROR,
			data: data
		}
	}
}
function cleanUp() {
	return dispatch => dispatch({type: actionConstants.GET_ALBUM_INFO_CLEAR})
}
