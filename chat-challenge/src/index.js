import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';
import {config} from './FirebaseConfig.js';

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
