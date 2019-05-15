'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const store_actions = require('../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const addTodo = store_actions.addTodo

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

  onSubmitHandler = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state.description)
    this.setState({ description: '' })
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
 * Define state mapping function
 */

function mapStateToProps(state) {
  return {
    description: state.description
  }
}

/**
 * Export component
 */

module.exports = connect(mapStateToProps, { addTodo })(TodoForm)
