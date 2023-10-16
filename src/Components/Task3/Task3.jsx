import { Component } from "react";
import './style.css'

class Task3 extends Component {

    constructor() {
        super();
        this.state = {
            
            children:"",
            IsLogged: false,
            subscribe: "Guest"

        }
        this.changeMessage = this.changeMessage.bind(this)
    }
    changeMessage() {

        this.setState({
            children:this.props.children,
            IsLogged: true,
            subscribe: "You now have a subscription"

        })
    }

    render() {

        return(
            <div className="divo">
                <h1>{this.state.IsLogged.toString()}</h1>
                <h2>{this.state.subscribe}</h2>
                <h3>{this.state.children}</h3>
                <button onClick={() => this.changeMessage()} >Subscribe</button>
            </div>
        )
    }
}
export default Task3;
