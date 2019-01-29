import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './Login';
import Home from './Home.js';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userCount: 0
    };
  }

  componentDidMount() {
    this.updateUserCounter();
  }
  updateUserCounter() {
    const usersRef = firebase
      .database()
      .ref()
      .child('users');

    usersRef.on('value', snap => {
      const userCount = snap.numChildren();
      this.setState({ userCount: userCount });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={() => <Login userCount={this.state.userCount} />} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
