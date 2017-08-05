import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Contact extends Component {
	render() {
		return (
			<div>
				<ul>
					<NavLink exact to="/" activeStyle={{fontWeight: 'bold',color: 'red'}}>Home</NavLink>
			        <NavLink to="/about" activeStyle={{fontWeight: 'bold',color: 'red'}}>About</NavLink>
			        <NavLink to="/contact" activeStyle={{fontWeight: 'bold',color: 'red'}}>Contact</NavLink>
				</ul>
				<h2>Contact</h2>
				<p>This is contact page</p>
			</div>
		);
	}
}