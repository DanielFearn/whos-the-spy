import React, { Component } from 'react';
import './../app.css';

export default class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    leaveButtonClick() {
        // test code, delete this
        var currentCard = this.props.appState.get.card;
        if(currentCard < 20){this.props.appState.set({card: currentCard+1});}
    }

    render() {
        let barContent = null;
        if(this.props.appState.get.joined){
            barContent = <div className="leave-game-btn" onClick={this.leaveButtonClick.bind(this)}>LEAVE<br/>GAME</div>;
        }

        return (
            <div className="menu-bar">
                {barContent}
            </div>
        );
    }
}