import React, { Component } from 'react';
 
class Project extends Component {
	render() {
		return(
			<div>
				<Header />
				<img src={this.props.img} alt=''/>
				<h3>{this.props.name}</h3>
			</div>
		)
	}
}

export default Project;