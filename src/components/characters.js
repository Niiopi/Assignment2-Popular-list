import React, { Component } from 'react'
import Members from './members'

export class characters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{
        this.props.list.map(entry => {
          return <Members bio={entry} voteChange={this.props.voteChange}/>
        })
      }
      </div>
    )
  }
}

export default characters
