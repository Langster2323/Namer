import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var NAMES = [
  {
    name: "Ahkeem"
  },
];

function Header () {
  return(
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Namer</h2>
    </div>
  )
}

function Intro () {
  <div className="App">
  <Header />
    <p className="App-intro">
      This will just be a name collector.
    </p>
  </div>
}

class App extends Component {
  render() {
    return (
      <Intro />
    );
  }
}

export default App;
