import React, { Component } from 'react';

import GistService from '../../services/gist';
import ParserService from '../../services/parser';
import Grid from '../Grid';

import gistConfig from '../../config/gist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      npcList: []
    };

    this.gist = new GistService();
  }

  componentDidMount() {
    this.gist.download().then(data => {
      this.setState({
        npcList: ParserService.parseToNpcList(
          data.files[gistConfig.filename].content
        )
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Grid
          npcList={this.state.npcList}
          uploadNpcList={() => this.gist.uploadNpcList(this.state.npcList)}
        />
      </div>
    );
  }
}

export default App;
