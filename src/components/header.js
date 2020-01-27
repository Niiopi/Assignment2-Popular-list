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
  maxWidth: "35%",
  margin: "auto"
}

export default header
