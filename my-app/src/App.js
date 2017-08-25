import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import AddNameForm from './components/AddNameForm';
import SearchForm from './components/SearchForm';

var NAMES = [
  {
    name: "Ahkeem"
  },
];


class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
        <Grid>
          <h1>Name App</h1>
          <p>This is a simple name collection app</p>
          <SearchForm />
          <AddNameForm />
        </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
