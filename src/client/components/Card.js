import React, { Component } from 'react';
import './../app.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var cardID = this.props.appState.get.card;
        var cardName,cardText;

        if(cardID == 20){
            cardName = 'spy';
            cardText = 'You are the ';
        }else{
            cardName = this.props.appState.get.locations[cardID];
            cardText = 'The location is the ';
        }

        return (
            <div className="card-view">
                <img src={this.props.appState.get.cardUrl} />
                <div className="card-title">
                    {cardText}<br/><strong>{cardName.toUpperCase()}</strong>                
                </div>
            </div>
        );
    }

 }