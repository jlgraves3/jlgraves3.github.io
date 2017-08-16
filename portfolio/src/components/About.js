import React, { Component } from 'react';
import Header from './Header';

class About extends Component {
	render() {
		return(
			<div>
				<Header />
				<main>
					<h1>About</h1>
					<p>I am full stack web developer....</p>
				</main>
			</div>
		)
	}
}

export default About;