'use strict'

/**
 * Dependencies
 */

const React = require('react')
const TodoForm = require('./TodoForm')
const TodoList = require('./TodoList')

/**
 * Define component
 */

function TodoContainer() {
  return (
    <div>
      TodoContainer
      <TodoForm />
      <TodoList />
    </div>
  )
}

/**
 * Export component
 */

module.exports = TodoContainer
