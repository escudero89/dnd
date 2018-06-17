import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './App.css';

import GistService from './services/gist';
import Grid from './components/Grid';

class App extends Component {
  componentWillMount() {
    const gist = new GistService();
    gist.download();
  }

  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}

export default App;
