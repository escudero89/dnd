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
        <header>
          taken from &nbsp;<a
            href="https://gist.github.com/escudero89/16bbb227af56db82f263464dde8e852b"
            target="_blank"
            rel="noreferrer"
          >
            gist
          </a>
        </header>
        <Grid npcList={this.state.npcList} />
      </div>
    );
  }
}

export default App;
