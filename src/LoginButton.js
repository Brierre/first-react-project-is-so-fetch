import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default class LoginButton extends Component {
    render() {
        return (
            <button className="btn btn-rounded" id="login-button">Login</button>
        );
    }
};