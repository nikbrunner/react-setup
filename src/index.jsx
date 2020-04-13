import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import App from './components/App/App';

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute(
    'data-browser',
    navigator.userAgent,
  );
});

const reactRoot = document.getElementById('react-root');

ReactDOM.render(<App />, reactRoot);
