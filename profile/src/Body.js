import React, { Component } from 'react';
import About from './About';
import './Body.css';

export default class Body extends Component{
	render(){
		return(
			<div>
				<div>
					<About />
				</div>
			</div>
		);
	}
}
