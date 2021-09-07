import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from '../src/styles/global';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
