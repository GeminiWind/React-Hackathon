import React, { Component } from 'react'

export default class User extends Component{
	render(){
		 const { match } = this.props
		return (
			<p> Hello {match.params.id}</p>
		)
	}
}