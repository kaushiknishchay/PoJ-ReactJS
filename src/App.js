import React, {Component} from "react";
// import logo from './logo.svg';
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import CollectionPage from "./components/Album/CollectionPage";
import AlbumSliderLayout from "./components/Album/AlbumSliderLayout";
import NavBar from "./components/NavBar/NavBarComponent";
import {Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import AlbumInfoPage from "./components/Album/AlbumInfoPage";

class App extends Component {
	render() {
		return (
				<div>
					<main className="body-wrapper">
						<NavBar/>
						<div className="offset"/>
						<div>
							<Route exact path="/" component={HomePage}/>
							<Route exact path="/collection" component={CollectionPage}/>
							<Route exact path="/collection/:colKey" component={CollectionPage}/>
							<Route exact path="/collection/:colKey/:colSlug" component={CollectionPage}/>
							<Route exact path="/album" component={AlbumInfoPage}/>
							<Route exact path="/album/:albumKey" component={AlbumInfoPage}/>
							<Route path="/album/:albumKey/:albumSlug" component={AlbumInfoPage}/>
						</div>

						<div className="slide-portfolio-overlay"/>
					</main>
					<a href="#0" className="slide-portfolio-item-content-close">
						<i className="budicon-cancel-1"/></a>
					<FooterComponent/>
					<AlbumSliderLayout/>
				</div>

		);
	}
}

export default App;
