'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const store_actions = require('../store/actions/index')

/**
 * Constants
 */

const connect = react_redux.connect
const toggleTodoCompleted = store_actions.toggleTodoCompleted
const removeTodo = store_actions.removeTodo

/**
 * Define component
 */


function TodoListItem(props) {
  return (
    <li>
      <span onClick={() => props.toggleTodoCompleted(props.todo_index)}>
        {(props.todo.completed) ? <s>{props.todo.description}</s> : props.todo.description}
      </span>
      <span className="pl-3" style={{ color: '#AAA', cursor: 'pointer' }} onClick={() => props.removeTodo(props.todo_index)}>x</span>
    </li>
  )
}

/**
 * Define state mapping function
 */

const mapStateToProps = (state) => {
  return state
}

/**
 * Export component
 */

module.exports = connect(mapStateToProps, { removeTodo, toggleTodoCompleted })(TodoListItem)
