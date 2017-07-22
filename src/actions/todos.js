export const fetchTodos = () => {
    const todos = [
        {
            id: 1,
            title: 'todo1'
        }
    ]

    return {
        type: 'FETCH_TODO',
        todos
    }
}