import React, { Component } from 'react';
import App from './App';
import './app.css';

export default class AppState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joined: true,
        };
    }

    setAppState(newAppState){
        this.setState(newAppState);
    }

    render() {
        return (
            <div className='AppState'>
                <App appState={{get: this.state, set: this.setAppState.bind(this)}} />
            </div>
        );
    }
}