import axios from "axios";
import {API_URL} from "./config.constants";

export const fetchData = {
	getCollection,
	getAlbum,
};

let serverUrl = API_URL;

let sConfig = {
	onUploadProgress: function (progressEvent) {
		let percentCompleted = Math.round(
				progressEvent.loaded * 100 / progressEvent.total
		);
		console.log("Uploaded: " + percentCompleted + "%");
	},
	headers: {}
};


function getCollection(colId = "") {
	return axios.get(serverUrl + '/getAllCollection' + colId, sConfig);
}

function getAlbum(albumId) {
	return axios.get(serverUrl + '/getAlbumInfo/' + albumId, sConfig);
}
