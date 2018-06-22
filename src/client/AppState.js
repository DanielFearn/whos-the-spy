import React, { Component } from 'react';
import App from './App';
import './app.css';

export default class AppState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'join',
            card: 0,
            locations: ['Race Track', 'Vineyard', 'Library', 'Retirement Home', 'Construction Site', 'Candy Factory', 'Coal Mine', 'Rock Concert', 'Wedding', 'Harbour Docks', 'Art Museum', 'Stadium', 'Cat Show', 'Jail', 'The U.N.', 'Subway', 'Cemetary', 'Jazz Club', 'Gas Station', 'Sightseeing Bus']
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