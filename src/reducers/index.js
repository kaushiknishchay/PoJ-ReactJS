import {combineReducers} from "redux";
import collectionReducer from "./collection.reducer";
import albumReducer from "./album.reducer";

export const rootReducer = combineReducers({
	collectionReducer: collectionReducer,
	albumReducer: albumReducer
});