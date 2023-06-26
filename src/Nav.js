import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './img/on-wednesdays-we-wear-pink-unicorns.gif'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <a className="navbar-brand p-0" href="#brand"><img src={logo} id="wednesday" alt="logo"/></a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active h-100">
                            <a className="nav-link" href="https://en.wikipedia.org/wiki/Toaster_Strudel" target="_blank" rel="noreferrer">Toaster Strudel Real Facts</a>
                        </li>
                        <li className="nav-item h-100">
                            <a className="nav-link" href="https://www.popsci.com/fat-protein-carbohydrate-macro-good-bad/" target="_blank" rel="noreferrer">Is butter a carb?</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};