import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tests from './components/tests';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Mongo Starter</h1>
        </header>
        <Tests />
      </div>
    );
  }
}

export default App;
