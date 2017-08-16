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

class AddNameForm extends React.Component {
  render () {
    return (
      <form>
        <input type="text" value={this.props.name} />
        <input type="submit" value="Add Name" />
      </form>
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

class FilterNameTable extends React.Component {
  render () {
    return (
      <Intro />
      <NameTable />
    )
  };
}

class App extends Component {
  render() {
    return (
      <Intro />
      <NameTable />
    );
  }
}

export default App;
