'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Define component
 */

function TodoForm() {
  function onSubmitHandler(event) {
    event.preventDefault()
    console.log('onSubmit')
  }

  function onChangeHandler() {
    console.log('onChange')
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" name="description" onChange={onChangeHandler} required />
      <button type="submit">Add Todo</button>
    </form>
  )
}

/**
 * Export component
 */

module.exports = TodoForm
