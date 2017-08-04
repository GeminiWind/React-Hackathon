import React, { Component } from 'react'

export default class Hello extends Component{
    render(){
        return (
            <div>
                <p>Hello {this.props.username}, I am the simplest component</p>
            </div>
        )
    }
}