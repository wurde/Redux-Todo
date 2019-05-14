'use strict'

/**
 * Dependencies
 */

const React = require('react')
const TodoForm = require('./TodoForm')
const TodoList = require('./TodoList')

/**
 * Define component
 */

function TodoContainer() {
  return (
    <main>

      <div className="container">
        <div className="row">
          <div className="col-12">

            <h1 className="mt-4">Todo</h1>
            <TodoForm />
            <TodoList />

          </div>
        </div>
      </div>

    </main>
  )
}

/**
 * Export component
 */

module.exports = TodoContainer
