import React, { Component } from 'react';

export default class HomeParallax extends Component {
  render() {
    let style = {
	    "background-image": "url(images/art/parallax2.jpg)"
    };
    return (
            <div className="post-parallax parallax inverse-wrapper parallax2" style={style}>
              <div className="container inner text-center">
                <div className="headline text-center">
                  <h2>hello! I'm lydia doe, a freelance photographer.</h2>
                  <p className="lead">based in london, I specialize in fashion, wedding, food &amp; drink photography.</p>
                </div>
              </div>
            </div>
    )
  }
}
