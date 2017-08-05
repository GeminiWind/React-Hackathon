import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
			        <li><Link to="/about">About</Link></li>
			        <li><Link to="/contact">Contact</Link></li>
			        <li><Link to="/user/10">User</Link></li>
				</ul>
				<h2>About</h2>
				<p>This is About page</p>
			</div>
		);
	}
}