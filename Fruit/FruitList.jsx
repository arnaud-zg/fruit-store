import React, { Component } from 'react'
import Fruit from './Fruit.jsx'

class FruitList extends Component {

  constructor() {
    super()
    this.state = {
      id: '',
      name: '',
      price: ''
    }

    this._handleText = this._handleText.bind(this)
  }

  _renderFruit(e, i) {
    return (
      <div>
        <Fruit name={e.name} price={e.price} key={e.key}/>
        <button onClick={this.props.handleDeleteFruit.bind(this, {id: e.id, name: e.name, price: e.price})}> Delete it </button>
      </div>
    )
  }

  _handleText(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" name="name" value={this.state.name} onChange={this._handleText}/>
        <input type="text" name="price" value={this.state.price} onChange={this._handleText}/>
        <button onClick={this.props.handleAddFruit.bind(this, {name: this.state.name, price: this.state.price})}> Add it </button>
        <ul> { this.props.fruits.map(this._renderFruit, this) } </ul>
      </div>
    )
  }
}

export default FruitList
