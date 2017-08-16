import React, { Component } from 'react';
import {
	Link 
} from 'react-router-dom';

class Header extends Component {
	render() {
		return(
			<header>
				<Link to='/'><h3>Julia Graves</h3></Link>
				<nav>
					<Link to='/projects'><h4>Projects</h4></Link>
					<Link to='/about'><h4>About</h4></Link>
					<Link to='/'><h4>Contact</h4></Link>
				</nav>
			</header>
		)
	}
}

export default Header;