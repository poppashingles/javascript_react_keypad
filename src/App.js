import React, { Component } from 'react';
import './App.css';

import { Keypad } from './container/keypad.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Keypad />
      </div>
    );
  }
}

export default App;
