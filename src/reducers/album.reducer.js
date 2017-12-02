import {actionConstants} from "../actions/action.constants";

const initialState = {
	albumInfo: {
		name: "",
		description: ""
	},
	albumInfoError: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case actionConstants.GET_ALBUM_INFO_SUCCESS:
			return {
				albumInfo: action.data,
				albumInfoError: ""
			};
		case actionConstants.GET_ALBUM_INFO_ERROR:
			return {
				albumInfo: "",
				albumInfoError: action.data
			};
		case actionConstants.GET_ALBUM_INFO_CLEAR:
			return {
				albumInfo: "",
				albumInfoError: ""
			};
		default:
			return state;
	}
}