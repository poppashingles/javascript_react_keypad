import React, { Component } from 'react';
import './App.css';

import { VendingMachine } from './container/vending_machine.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VendingMachine />
      </div>
    );
  }
}

export default App;
