import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';

import registerServiceWorker from './registerServiceWorker';

import { Layout } from 'antd';

import App from './components/App';

ReactDOM.render(
  <Layout className="layout">
    <header>
      taken from &nbsp;<a
        href="https://gist.github.com/escudero89/16bbb227af56db82f263464dde8e852b"
        target="_blank"
        rel="noopener noreferrer"
      >
        gist
      </a>
    </header>
    <Layout.Content style={{ padding: '8px' }}>
      <App />
    </Layout.Content>
  </Layout>,
  document.getElementById('root')
);

registerServiceWorker();
