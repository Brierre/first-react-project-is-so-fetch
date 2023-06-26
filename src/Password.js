import React, {Component} from 'react';

export default class Password extends Component {
    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control-rounded p-2 mr-sm-2" type="password" placeholder="super-secret code" id="password"/>
            </form>
        );
    }
};

