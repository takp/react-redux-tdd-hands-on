import React from 'react'

/*
class TodoList extends Component {
}
 */

const TodoList = ({todos}) => (
    <ul className="todo-list">
        { todos.map(todo => <li key="{todo.id}">{todo.title}</li>) }
    </ul>
)

export default TodoList
