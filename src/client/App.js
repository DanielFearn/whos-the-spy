import React, { Component } from 'react';
import './app.css';
import TitleBar from './components/TitleBar';
import MenuBar from './components/MenuBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <TitleBar appState={this.props.appState} title="SPYFALL" />
        <MenuBar appState={this.props.appState} />
      </div>
    );
  }
}
