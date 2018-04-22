import React from 'react';

import { GetAButton } from '../components/order_item_a_button.jsx'
import { GetBButton } from '../components/order_item_b_button.jsx'
import { GetCButton } from '../components/order_item_c_button.jsx'
import { Refund } from '../components/refund.jsx'
import { Screen } from '../components/screen.jsx'
import { Service } from '../components/service.jsx'

export class Keypad extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.setScreenState = this.setScreenState.bind(this)
  }

  componentDidMount() {
    const url = 'https://api.myjson.com/bins/7vhxn'

    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.send()

    request.addEventListener('load', () => {
      if(request.status !== 200) return
      const jsonString = request.responseText
      const options = JSON.parse(jsonString)

      this.setState({ options: options })
      this.setScreenState("Make a selection", "")
      console.log(this.state.options);
    })
  }

  setScreenState(screenOutputName, screenOutputPrice) {
    this.setState({ screen: screenOutputName + " " + screenOutputPrice })
  }

  render() {
    return (
      <div className="App">
        <Screen screen={ this.state.screen }/>
        <GetAButton options={ this.state.options } screens={ this.setScreenState }/>
        <GetBButton options={ this.state.options } screens={ this.setScreenState }/>
        <GetCButton options={ this.state.options } screens={ this.setScreenState }/>
        <Refund />
        <Service />
      </div>
    );
  }
}
