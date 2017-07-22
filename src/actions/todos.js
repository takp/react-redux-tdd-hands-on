export const fetchTodosSuccess = (todos) => {
    return {
        type: 'FETCH_TODOS_SUCCESS',
        todos
    }
}

export const fetchTodos = () => {
    const todos = [
        {
            id: 1,
            title: 'todo1'
        }
    ]

    return fetchTodosSuccess(todos)
}
