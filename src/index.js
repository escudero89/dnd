import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
