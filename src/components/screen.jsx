import React from 'react'

export class Screen extends React.Component {
  render() {
    return (
      <div>
        <p id="screen">{ this.props.screen }</p>
      </div>
    )
  }
}
