'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./App.css')

/**
 * Define component
 */

function App() {
  return (
    <div>
      TodoContainer
        TodoForm
        TodoList
          TodoListItem
    </div>
  )
}

/**
 * Export component
 */

module.exports = App
