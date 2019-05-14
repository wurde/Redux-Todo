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
    default:
      return state
  }
}

/**
 * Export reducer
 */

module.exports = reducer
