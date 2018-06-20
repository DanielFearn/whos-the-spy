import React, { Component } from 'react';
import './app.css';

export default class AppState extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    setAppState(newAppState){
        this.setState(newAppState);
    }

    render() {
        return (
            <div className='AppState'>
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {
                        appState: this.state,
                        setAppState: this.setAppState.bind(this)
                    });
                })}
            </div>
        );
    }
}