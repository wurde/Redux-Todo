'use strict'

/**
 * Dependencies
 */

const redux = require('redux')
const redux_logger = require('redux-logger')
const reducers = require('./reducers/index')

/**
 * Constants
 */

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

/**
 * Define store
 */

const store = createStore(reducers, applyMiddleware(redux_logger.logger))

/**
 * Export store
 */

module.exports = store
