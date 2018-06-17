import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './App.css';

import Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}

export default App;
