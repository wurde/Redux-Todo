'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Define component
 */

function TodoListItem(props) {
  return (
    <li>
      {(props.todo.completed) ? <s>{props.todo.description}</s> : props.todo.description}
    </li>
  )
}

/**
 * Export component
 */

module.exports = TodoListItem
