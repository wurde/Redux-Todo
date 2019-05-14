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
    default:
      return state
  }
}

/**
 * Export reducer
 */

module.exports = reducer
