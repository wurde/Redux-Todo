'use strict'

/**
 * Dependencies
 */

const React = require('react')
const TodoListItem = require('./TodoListItem')
const react_redux = require('react-redux')

/**
 * Constants
 */

const connect = react_redux.connect

/**
 * Define component
 */

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, i) => <TodoListItem key={i} todo={todo} /> )}
    </ul>
  )
}

/**
 * Define state mapping function
 */

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

/**
 * Export component
 */

module.exports = connect(mapStateToProps, {})(TodoList)
