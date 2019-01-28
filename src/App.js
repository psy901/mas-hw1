import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const rootRef = firebase
      .database()
      .ref()
      .child('speed');

    let newUser = rootRef.push();
    newUser.set({
      username: this.state.username,
      email: this.state.email
    });
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  render() {
    // console.log('render')
    return (
      <div className="App">
        <h1>Sample user input</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="form">
            <label>Enter Username: </label>
            <input
              type="text"
              name="username"
              // value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form">
            <label>Enter Email: </label>
            <input
              type="text"
              name="email"
              // value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
