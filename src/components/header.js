import React, { Component } from 'react'

export class header extends Component {
  render() {
    return (
      <h1 style={headerStyle}>
        Popular Justice League Members
      </h1>
    )
  }
}

const headerStyle = {
  maxWidth: '50%',
  borderBottom: '1px solid darkgray'
}

export default header
