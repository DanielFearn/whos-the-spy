import React, { Component } from 'react';
import './app.css';
import TitleBar from './components/TitleBar';
import Card from './components/Card';
import LocationList from './components/LocationList';
import MenuBar from './components/MenuBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getView() {
    switch(this.props.appState.get.view){
      case 'join':
        return (<div>join</div>);
        break;
      case 'card':
        return ([
          <Card appState={this.props.appState} />,
          <LocationList appState={this.props.appState} />
        ]);
        break;
      default:
        return (<div>View Error</div>);
    }
  }

  render() {
    return (
      <div className="app-container">
        <TitleBar appState={this.props.appState} title="ODD ONE OUT" />

        {this.getView()}
        <MenuBar appState={this.props.appState} />
      </div>
    );
  }
}
