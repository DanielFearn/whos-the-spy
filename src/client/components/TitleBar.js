import React, { Component } from 'react';
import './../app.css';

export default class TitleBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="title-bar">
                {this.props.title}
            </div>
        );
    }
}