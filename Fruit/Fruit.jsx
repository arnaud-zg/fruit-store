import React, { Component } from 'react'

class Fruit extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <span>
          Price: <input type="text" name="price" value={this.props.price}/>#
        </span>
        <hr/>
      </div>
    )
  }

}

export default Fruit
