'use strict'

/**
 * Dependencies
 */

const actions = require('../actions/index')

/**
 * Constants
 */

const initialState = { todos: [] }

/**
 * Define reducer
 */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        todos: [...state.todos, { description: action.description, completed: false }]
      }
    case actions.TOGGLE_TODO_COMPLETED:
      const new_todos = state.todos.map((todo, i) => {
        if (i === action.id) {
          todo.completed = !todo.completed
          return todo
        } else {
          return todo
        }
      })

      return {
        todos: new_todos
      }
    default:
      return state
  }
}

/**
 * Export reducer
 */

module.exports = reducer
