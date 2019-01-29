import React, { Component } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';

const initialState = {
  username: '',
  email: '',
  userCount: 0
};

class Login extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleSubmit = e => {
    e.preventDefault();
    const rootRef = firebase
      .database()
      .ref()
      .child('users');

    if (this.state.username !== '' && this.state.email !== '') {
      let newUser = rootRef.push();
      newUser.set({
        username: this.state.username,
        email: this.state.email
      });

      // reset the state and redirect to /home
      this.props.history.push('/home');
    } else {
      alert('Fields cannot be empty');
    }
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };


  render() {

    return (
      <div className="Login">
        <h1>Sample user input</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="form">
            <label>Enter Username: </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form">
            <label>Enter Email: </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form">
            <button type="submit">Submit</button>
          </div>

          <div className="App">
            <p>
              <b>User count: {this.props.userCount}</b>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
