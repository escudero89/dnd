import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Layout } from 'antd';

import { GistService, ParserService } from '../../services';
import Grid from '../Grid';

import gistConfig from '../../config/gist';

import './app.css';

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
    const Grido = () => (
      <Grid
        npcList={this.state.npcList}
        uploadNpcList={() => this.gist.uploadNpcList(this.state.npcList)}
      />
    );

    const A = () => null;

    return (
      <Router>
        <Layout className="layout">
          <header>
            <ul class="link-list">
              <li>
                <NavLink exact activeClassName="link--active" to="/">
                  Primary
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="link--active" to="/about">
                  Secondary
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="link--active" to="/topics">
                  Topics
                </NavLink>
              </li>
            </ul>
            <div className="right">
              taken from &nbsp;<a
                href="https://gist.github.com/escudero89/16bbb227af56db82f263464dde8e852b"
                target="_blank"
                rel="noopener noreferrer"
              >
                gist
              </a>
            </div>
          </header>
          <Layout.Content style={{ padding: '8px' }}>
            <div className="App">
              <Route exact path="/" component={Grido} />
              <Route path="/about" component={A} />
              <Route path="/topics" component={A} />
            </div>
          </Layout.Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
