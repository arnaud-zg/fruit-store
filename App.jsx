import React, { Component } from 'react'
import { FruitListContainer } from './Fruit'
import { DashboardContainer } from './Dashboard'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
          <FruitListContainer />
          <DashboardContainer />
      </div>
    )
  }
}

export default App
