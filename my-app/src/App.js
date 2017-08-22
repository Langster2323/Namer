import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

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
        <AddNameForm />
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
      <FilterNameTable names={NAMES} />
    );
  }
}

export default App;
