'use strict'

/**
 * Constants
 */

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED'

/**
 * Define actions
 */

const addTodo = (description) => ({ type: ADD_TODO, description })
const toggleTodoCompleted = (id) => ({ type: TOGGLE_TODO_COMPLETED, id })

/**
 * Export actions
 */

module.exports = {
  ADD_TODO: ADD_TODO,
  addTodo: addTodo,
  TOGGLE_TODO_COMPLETED: TOGGLE_TODO_COMPLETED,
  toggleTodoCompleted: toggleTodoCompleted,
}
