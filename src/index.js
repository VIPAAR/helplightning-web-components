import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('root');

  ReactDOM.render(
    <App />, // eslint-disable-line react/jsx-filename-extension
    container,
  );
}
