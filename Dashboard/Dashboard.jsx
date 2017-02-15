import React, { Component } from 'react'

class Dashboard extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <span>Il y a actuallement {this.props.fruits.length} fruits.</span>
      </div>
    )
  }

}

export default Dashboard
