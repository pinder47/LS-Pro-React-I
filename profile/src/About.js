import React, { Component } from 'react';
import './About.css';

export default class About extends Component{
	render(){
		return(
			<div className="about-container">
				<p> Hi! My name is James, and although I know {`it's`} unusual, I typically prefer short walks on the beach. <br />
					<br />My favorite paragraphs of Lorem Ipsum are, in order:
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue tristique scelerisque. In mattis lectus a purus bibendum pellentesque. Aenean non nisl quis lacus finibus posuere et a felis. Donec sed mattis felis. Nam risus orci, molestie ut fringilla eu, pellentesque eu mauris. Mauris ligula sem, tincidunt id neque in, auctor accumsan arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus est, vestibulum non nibh in, fermentum maximus tellus. Suspendisse consectetur arcu arcu, non lobortis tortor fermentum id.</li><br />

						<li>Morbi ligula dui, hendrerit non blandit vitae, tristique in massa. Phasellus ut risus mattis dui faucibus vestibulum a a ligula. Praesent euismod feugiat felis, et varius nisl dapibus eu. In maximus tortor et lectus venenatis, vehicula dignissim diam facilisis. Sed nec mollis est. Ut sollicitudin molestie lorem vitae auctor. Vestibulum vitae sollicitudin est. Vestibulum dui ex, laoreet sit amet odio eget, ultricies venenatis orci. Sed id ultrices dolor. Phasellus sollicitudin nisi id turpis blandit, quis scelerisque eros pharetra. Nulla vestibulum ex a sapien efficitur ultrices. Donec tincidunt sem at maximus gravida. Donec ut ligula ac odio iaculis blandit. Ut hendrerit odio id diam sollicitudin, sed facilisis dolor ultrices. Cras nibh orci, congue ac augue sed, placerat venenatis ligula.</li><br />

						<li> Curabitur vel cursus nisi, eu tristique est. Vivamus id justo ullamcorper, cursus eros non, vulputate velit. Praesent molestie fringilla dapibus. Pellentesque dolor libero, varius at porttitor sit amet, porttitor vel nisl. Etiam posuere ex nisl. Morbi vel sapien varius, congue nunc eu, consequat tortor. Phasellus urna leo, rhoncus lacinia diam in, posuere cursus est. Integer in arcu fermentum, consectetur tellus at, aliquam sem.</li><br />
					</ul>
				</p>
			</div>
		);
	}
}
