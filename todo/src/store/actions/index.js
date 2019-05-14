'use strict'

/**
 * Constants
 */

const ADD_TODO = 'ADD_TODO'

/**
 * Define actions
 */

const addTodo = (description) => ({ type: ADD_TODO, description })

/**
 * Export actions
 */

module.exports = {
  ADD_TODO: ADD_TODO,
  addTodo: addTodo,
}
