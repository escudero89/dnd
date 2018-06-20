import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { GistService, ParserService } from '../../services';
import { Grid, Header, NpcList } from '../../components';

import gistConfig from '../../config/gist';

class App extends React.Component {
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
    const Primary = () => (
      <Grid
        npcList={this.state.npcList}
        uploadNpcList={() => this.gist.uploadNpcList(this.state.npcList)}
      />
    );

    const Secondary = () => (
      <NpcList
        npcList={this.state.npcList}
        uploadNpcList={() => this.gist.uploadNpcList(this.state.npcList)}
      />
    );

    return (
      <Router>
        <Layout className="layout">
          <Header />
          <Layout.Content style={{ padding: '8px' }}>
            <div className="App">
              <Route exact path="/" component={Primary} />
              <Route path="/secondary" component={Secondary} />
            </div>
          </Layout.Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
