import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './App.css';

import GistService from './services/gist';
import ParserService from './services/parser';
import Grid from './components/Grid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      npcList: []
    };
  }
  componentDidMount() {
    const gist = new GistService();
    gist.download().then(data => {
      this.setState({
        npcList: ParserService.parseToNpcList(data.files['dnd-01.md'].content)
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Grid npcList={this.state.npcList} />
      </div>
    );
  }
}

export default App;
