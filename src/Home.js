import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Home extends Component {

  handleClick = e => {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="Home">
        <h1>Welcome</h1>
        <button onClick={this.handleClick}>Click to reset</button>
      </div>
    );
  }
}

export default withRouter(Home);
