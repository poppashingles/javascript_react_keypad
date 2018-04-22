import React from 'react'

export class GetAButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.screens(this.props.options.itemA.name, this.props.options.itemA.value)
  }

  render() {
    return (
      <div>
        <button id="get-a-button" onClick={this.handleClick}>Order Item A</button>
      </div>
    )
  }
}
