import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import {HashRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from './store/configureStore';


ReactDOM.render(
		<Provider store={store}>
			<Router>
				<App/>
			</Router>
		</Provider>
		,
		document.getElementById('root'));
registerServiceWorker();
