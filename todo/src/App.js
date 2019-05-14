'use strict'

/**
 * Dependencies
 */

const React = require('react')
const redux = require('redux')
const react_redux = require('react-redux')
const components = require('./components/index')
const store = require('./store/index')

/**
 * Constants
 */

const Provider = react_redux.Provider
const TodoContainer = components.TodoContainer

/**
 * Import component styles
 */

require('./App.scss')

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
