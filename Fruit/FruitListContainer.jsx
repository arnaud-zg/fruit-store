import React, { Component } from 'react'
import FruitList from './FruitList.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FruitActions } from '../Actions'

class FruitListContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1148n9')
    .then((response) => {
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then((json) => {
          json.forEach((fruit) => {
            this.props.fruitActions.addFruit({
              id: fruit.key,
              name: fruit.name,
              price: fruit.price
            })
          })
        })
      } else {
        console.log("Oops, we haven't got JSON!");
      }
    });
  }

  // Api call
  handleAddFruit(fruit) {
    this.props.fruitActions.addFruit(fruit);
  }

  // Api call
  handleDeleteFruit(fruit) {
    this.props.fruitActions.deleteFruit(fruit);
  }

  // Api call
  handleUpdateFruit(fruit) {
  }

  render() {
    return <FruitList fruits={this.props.fruits}
                      handleAddFruit={this.handleAddFruit.bind(this)}
                      handleDeleteFruit={this.handleDeleteFruit.bind(this)}/>;
  }
}

const mapStateToProps = state => ({
  fruits: state.Fruits
})

const mapDispatchToProps = dispatch => ({
   fruitActions: bindActionCreators(FruitActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:true})(FruitListContainer)
