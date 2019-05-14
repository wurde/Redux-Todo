'use strict'

/**
 * Dependencies
 */

const React = require('react')
const redux = require('redux')
const react_redux = require('react-redux')
const redux_logger = require('redux-logger')
const reducers = require('./reducers/index')
const components = require('./components/index')

/**
 * Constants
 */

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const Provider = react_redux.Provider
const TodoContainer = components.TodoContainer

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define store
 */

const store = createStore(reducers, applyMiddleware(redux_logger.logger))

/**
 * Define component
 */

function App() {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  )
}

/**
 * Export component
 */

module.exports = App
