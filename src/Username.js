import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Username extends Component {
    render() {
        return (
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control-rounded p-2 mr-sm-2" type="username" placeholder="username" id="username"/>
            </form>
        );
    }
};

