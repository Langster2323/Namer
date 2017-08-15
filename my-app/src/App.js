import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var NAMES = [
  {
    name: "Ahkeem"
  },
];

class Header extends React.Component {
  render() {
  return(
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Namer</h2>
    </div>
  )
  };
}

class Intro extends React.Component {
  render() {
  return (
    <div className="App">
    <Header />
      <p className="App-intro">
        This will just be a name collector.
      </p>
    </div>
  )
  };
}

class NameTable extends React.Component {
  render() {
    return (
      <div>

      </div>
    )
  };
}

class NameTableRow extends React.Component {
  render() {
    return (
      <div>
      <tr>{this.props.Names.name}</tr>
      </div>
    )
  };
}

class App extends Component {
  render() {
    return (
      <Intro />
    );
  }
}

export default App;
