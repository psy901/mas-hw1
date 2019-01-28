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
        <form onSubmit={this.handleSubmit}>
          <label>Enter Username: </label>
          <input
            type="text"
            name="username"
            // value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <label>Enter Email: </label>
          <input
            type="text"
            name="email"
            // value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
