'use strict'

/**
 * Dependencies
 */

const React = require('react')
const redux = require('redux')
const react_redux = require('react-redux')
const reducers = require('./reducers/index')
const components = require('./components/index')

/**
 * Constants
 */

const createStore = redux.createStore
const Provider = react_redux.Provider
const TodoContainer = components.TodoContainer

/**
 * Import component styles
 */

require('./App.css')

/**
 * Define store
 */

const store = createStore(reducers)

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
