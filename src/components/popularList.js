import React, { Component } from 'react'

class PopularList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        {
          "Codename": "Superman",
          "name": "Clark Kent",
          "firstAppearance": "April 1938"
        }
      ]
    }
  }


  render() {
    return (
      <div>

      </div>
    )
  }
}

export default PopularList
