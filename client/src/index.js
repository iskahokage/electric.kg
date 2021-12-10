import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/style.css';
import './components/header/assets/Header.css';
import './components/products/assets/Products.css';
import './components/message/assets/Message.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
