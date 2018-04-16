import React from 'react';

import { GetAButton } from '../components/get-a-button.jsx'
import { GetBButton } from '../components/get-b-button.jsx'
import { GetCButton } from '../components/get-c-button.jsx'

export class Keypad extends React.Component {
  render() {
    return (
      <div className="App">
        <GetAButton />
        <GetBButton />
        <GetCButton />
      </div>
    );
  }
}
