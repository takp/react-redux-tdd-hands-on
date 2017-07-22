import * as api from '../api'

export const fetchTodosSuccess = (todos) => {
    return {
        type: 'FETCH_TODOS_SUCCESS',
        todos
    }
}

export const fetchTodos = () => {
    return api.fetchTodos()
        .then(res => fetchTodosSuccess(res))
}
