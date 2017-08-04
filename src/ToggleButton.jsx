import React, { Component } from 'react'

export default class ToggleButton extends Component {
    constructor(props) {
        super(props)
        this.setState({status: true})
    }
    handleClickButton(){
        alert('Button was clicked')
    }
    handleSubmit(event) {
        event.preventDefault();
        alert("Submited")
    }
    handleOnChage(event) {
        event.preventDefault();
        alert(event.target.value)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleOnChage}/>
                    <button type="button" class="btn btn-primary" onClick={this.handleClickButton}>
                     Click Button
                    </button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}