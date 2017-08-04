import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        console.log("Constructor")
        super(props)
        this.state = { firstName: "Gemini", lastName: "Wind" }
        setTimeout(() => {
            this.setState({ firstName: "Stranger"})
        },3000)
    }
    componentWillMount(){
        console.log("Component will mount")
    }
    componentDidMount(){
        console.log("Component did mount")
    }
    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props");
        console.log("Next props: ")
        console.log(nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("should component update")
        console.log("Next Props:")
        console.log(nextProps)
        console.log("Next state:")
        console.log(nextState)
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update")
        console.log("Next Props:")
        console.log(nextProps)
        console.log("Next state:")
        console.log(nextState)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update")
        console.log("Previous Props:")
        console.log(prevProps)
        console.log("Previous state:")
        console.log(prevState)
    }
    componentWillUnMount(){
        console.log("Component will unmount")
    }
    render(){
        return (
            <div>
                <p>First Name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName}</p>
            </div>
        );
    }

}