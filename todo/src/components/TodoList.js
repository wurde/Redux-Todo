'use strict'

/**
 * Dependencies
 */

const React = require('react')
const TodoListItem = require('./TodoListItem')

/**
 * Define component
 */

function TodoList(props) {
  let todos = [{ description: 'Todo 1', completed: false }, { description: 'Todo 2', completed: true }]

  return (
    <ul>
      {todos.map(todo => <TodoListItem todo={todo} /> )}
    </ul>
  )
}

/**
 * Export component
 */

module.exports = TodoList
