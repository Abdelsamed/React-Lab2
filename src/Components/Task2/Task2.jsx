import { render } from "@testing-library/react";
import { Component } from "react";
import '../Task1/style.css'

class Task2 extends Component {
    render(){
        return(
        <div>
            
            <h1>this is Guest who`s Track {this.props.Cname} ,and Duration {this.props.Duration} Hours</h1>
            <h2>{this.props.children}</h2>

        </div>
        )
    }
}
export default Task2;
