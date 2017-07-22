import React, { Component } from 'react'
import TodoList from '../../components/TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/todos'

class App extends Component {
    render() {
        const { todos, actions } = this.props

        return (
            <TodoList todos={todos} actions={actions} />
        )
    }
}

// stateの中のtodosを渡す
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

// DispatchをPropsをMap
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)