import React, { Component } from 'react';
import './../app.css';

export default class LocationList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var locations = this.props.appState.get.locations;
        var locationElements = locations.map(loc => {
            return (<li key={loc}>{loc}</li>);
        });
        return (
            <div className="location-list">
                <h6>Possible locations:</h6>
                <ul>
                    {locationElements}
                </ul>
            </div>
        );
    }
}