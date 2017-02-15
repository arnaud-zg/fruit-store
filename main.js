import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducersApp from './Reducers'
import App from './App.jsx'

let fruitStore = createStore(reducersApp)

ReactDOM.render(
  <Provider store={fruitStore}>
    <App />
  </Provider>,
  document.getElementById('app')
)
