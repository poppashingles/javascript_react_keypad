import React from 'react'

export class GetCButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.screens(this.props.options.itemC.name, this.props.options.itemC.value)
  }

  render() {
    return (
      <div>
        <button id="get-c-button" onClick={this.handleClick}>Order Item C</button>
      </div>
    )
  }
}
