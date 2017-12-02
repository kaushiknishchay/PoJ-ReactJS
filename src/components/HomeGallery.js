import React, {Component} from 'react';
import HomeGalleryFilter from "./HomeGalleryFilter";
import HomeGallerySection from "./HomeGallerySection";

export default class HomeGallery extends Component {
	render() {
		return (
				<div>
					<HomeGalleryFilter/>
					<HomeGallerySection title="Hello1" desc="description"/>
					<HomeGallerySection title="Hello2" desc="description 2"/>
				</div>
		)
	}
}
