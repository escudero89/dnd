import React, { Component } from 'react';
import logo from './logo.svg';

import 'antd/dist/antd.css';
import './App.css';

import Button from 'antd/lib/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Button type="primary">Button</Button>
        </p>
      </div>
    );
  }
}

export default App;
