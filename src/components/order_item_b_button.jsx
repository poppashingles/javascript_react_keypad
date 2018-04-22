import React from 'react'

export class GetBButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.screens(this.props.options.itemB.name, this.props.options.itemB.value)
  }

  render() {
    return (
      <div>
        <button id="get-b-button" onClick={this.handleClick}>Order Item B</button>
      </div>
    )
  }
}
