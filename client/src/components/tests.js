import React, { Component } from 'react';
import './tests.css';

class Tests extends Component {
  constructor() {
    super();
    this.state = {
      tests: []
    };
  }

  componentDidMount() {
    fetch('/test')
      .then(res => res.json())
      .then(tests => this.setState({tests}, () => console.log('tests fetched...', tests)));
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.state.tests.map(test => 
          <li key={test._id}>{test.name}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Tests;
