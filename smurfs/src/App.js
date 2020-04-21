import React, { Component } from 'react';
import './App.css';
import Smurfs from './components/Smurfs';
import SmurfForm from './components/SmurfForm';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
