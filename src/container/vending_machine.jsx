import React from 'react';

import { Keypad } from './keypad.jsx'

export class VendingMachine extends React.Component {
  render() {
    return (
      <div className="App">
        <Keypad />
      </div>
    );
  }
}
