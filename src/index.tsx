import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
// import 'bulma/css/bulma.min.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
