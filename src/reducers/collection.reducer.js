import {actionConstants} from "../actions/action.constants";

const initialState = {
	collectionList: [],
	collectionListError: "",
	collectionInfo: {},
	collectionInfoError: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case actionConstants.GET_COLLECTION_SUCCESS:
			return {
				...state,
				collectionList: action.data,
				collectionListError: "",
			};
		case actionConstants.GET_COLLECTION_ERROR:
			return {
				...state,
				collectionList: [],
				collectionListError: action.data
			};
		case actionConstants.GET_COLLECTION_ALBUM_SUCCESS:
			return {
				...state,
				collectionInfo: action.data,
				collectionInfoError: ""
			};
		case actionConstants.GET_COLLECTION_ALBUM_ERROR:
			return {
				...state,
				collectionInfoError: action.data,
				collectionInfo: {},
			};
		default:
			return state;
	}
}