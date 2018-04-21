import React from 'react';

import { Keypad } from './keypad.jsx'

export class VendingMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const url = 'http://localhost:3001/options.json'

    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.send()

    request.addEventListener('load', () => {
      if(request.status !== 200) return
      const jsonString = request.responseText
      const question = JSON.parse(jsonString)

      this.setState({ options: options })
    })
  }

  render() {
    return (
      <div className="App">
        <Keypad />
      </div>
    );
  }
}
