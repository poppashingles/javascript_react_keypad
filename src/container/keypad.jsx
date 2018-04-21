import React from 'react';

import { GetAButton } from '../components/order_item_a_button.jsx'
import { GetBButton } from '../components/order_item_b_button.jsx'
import { GetCButton } from '../components/order_item_c_button.jsx'
import { Refund } from '../components/refund.jsx'
import { Screen } from '../components/screen.jsx'

export class Keypad extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Screen />
        <GetAButton />
        <GetBButton />
        <GetCButton />
        <Refund />
      </div>
    );
  }
}
