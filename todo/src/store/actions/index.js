'use strict'

/**
 * Constants
 */

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED'

/**
 * Define actions
 */

const addTodo = (description) => ({ type: ADD_TODO, description })
const removeTodo = (id) => ({ type: REMOVE_TODO, id })
const toggleTodoCompleted = (id) => ({ type: TOGGLE_TODO_COMPLETED, id })

/**
 * Export actions
 */

module.exports = {
  ADD_TODO: ADD_TODO,
  addTodo: addTodo,
  REMOVE_TODO: REMOVE_TODO,
  removeTodo: removeTodo,
  TOGGLE_TODO_COMPLETED: TOGGLE_TODO_COMPLETED,
  toggleTodoCompleted: toggleTodoCompleted,
}
