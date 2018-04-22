import React from 'react';

import { Keypad } from './keypad.jsx'

export class VendingMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Keypad />
      </div>
    );
  }
}
