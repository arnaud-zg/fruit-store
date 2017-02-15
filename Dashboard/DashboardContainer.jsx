import React, { Component } from 'react'
import Dashboard from './Dashboard.jsx'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FruitActions } from '../Actions'

class DashboardContainer extends Component {

  constructor() {
    super()
  }

  render() {
    return (
        <Dashboard fruits={this.props.fruits}/>
    )
  }

}

const mapStateToProps = state => ({
  fruits: state.Fruits
})

const mapDispatchToProps = dispatch => ({
   fruitActions: bindActionCreators(FruitActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:true})(DashboardContainer)
