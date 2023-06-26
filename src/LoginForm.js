import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Username from './Username';
import Password from './Password';
import LoginButton from './LoginButton';
import MeanImage from "./MeanImage";

export default class LoginForm extends Component {
    render() {
        return (
                <div className="photo">
                    <Nav></Nav>
                    <div className="login">
                        <div className="login-text">
                            <h3 className="font-face-graduate">Log In</h3>
                            <h1 className="font-face-ransom">(it's so fetch)</h1>
                        </div>
                        <Username></Username>
                        <Password></Password>
                        <LoginButton></LoginButton>
                    </div>
                    <MeanImage></MeanImage>
                </div>
        );
    }
};