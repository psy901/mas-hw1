import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "mas-hw.firebaseapp.com",
  databaseURL: "https://mas-hw.firebaseio.com",
  projectId: "mas-hw",
  storageBucket: "mas-hw.appspot.com",
  messagingSenderId: "1031804683655"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
