import React, { Component } from 'react';
import './../app.css';

export default class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {barContent: ''};
    }


    leaveButtonClick() {
        this.props.appState.set({joined: false});
    }

    render() {
        let barContent = null;
        if(this.props.appState.get.joined){
            barContent = <div className="leave-game-btn" onClick={this.leaveButtonClick.bind(this)}>LEAVE GAME</div>;
        }

        return (
            <div className="menu-bar">
                {barContent}
            </div>
        );
    }
}