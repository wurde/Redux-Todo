'use strict'

/**
 * Dependencies
 */

const React = require('react')
const TodoListItem = require('./TodoListItem')

/**
 * Define component
 */

function TodoList() {
  return (
    <div>
      TodoList
      <TodoListItem />
    </div>
  )
}

/**
 * Export component
 */

module.exports = TodoList
