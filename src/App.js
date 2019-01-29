import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'


const initialState = {
  username: '',
  email: '',
  userCount: 0
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    this.updateUserCounter()
  }

  updateUserCounter(){
    const usersRef = firebase.database().ref().child('users');
      usersRef.on('value', snap => {
        this.setState({
          userCount: snap.numChildren()
        });
    });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const rootRef = firebase
      .database()
      .ref()
      .child('users');
    
    if (this.state.username != '' && this.state.email != '') {
      let newUser = rootRef.push();
      newUser.set({
        username: this.state.username,
        email: this.state.email
      });
      this.setState(initialState);
      this.updateUserCounter();
    }
    else {
      alert("Fields cannot be empty");
    }
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  render() {
    return (
      <Router>
        <div className="App">

          <Route path="/" exact render={
            () => {
              return (<div>
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
                          <p><b>User count: {this.state.userCount}</b></p>
                        </div>
                      </form>
                      </div>
                     );
                  }
          }/>

          <Route path="/home" exact render={
            () => {
              return (<div>
                      <h1>Welcome</h1>
                      </div>
                     );
                  }
          }/>
          
        </div>
      </Router>
    );
  }
}

export default App;
