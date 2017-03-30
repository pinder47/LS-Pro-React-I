import React, { Component } from 'react';
import { Icon } from 'react-fa';
import './NavBar.css';
import profilepic from './profilepic.png';

export default class NavBar extends Component {
	render (){
		return(
		<div>
			<div className="navbar">

				<div className="navbar-title">
					<div className="title-text">James Hammer</div>
					<div className="subtitle-text">(Aspiring) Front End Java Developer</div>
				</div>

				<div className="navbar-item">
					<img src={profilepic} alt="Me making a snow angel in July"/>
				</div>

				<div className="navbar-item">
					<a href="http://www.twitter.com/misterpinder" className="navbar-link"><Icon name='twitter-square' /> Twitter</a>
					<a href="https://www.facebook.com/jphammer" className="navbar-link"><Icon name='facebook-square' /> Facebook</a>
					<a href="https://github.com/pinder47/" className="navbar-link"><Icon name='github' /> GitHub</a>
				</div>

			</div>
		</div>
		);
	}
}
