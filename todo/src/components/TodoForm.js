'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect

/**
 * Define component
 */

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: ''
    }
  }

  onSubmitHandler(event) {
    event.preventDefault()
    console.log('onSubmit')
  }

  onChangeHandler = (event) => {
    this.setState({ description: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" name="description" value={this.state.description} onChange={this.onChangeHandler} required></input>
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

/**
 * Export component
 */

module.exports = connect(null, {})(TodoForm)
