import client from './client.js'

export const fetchTodos = () => {
    return client.get('/todos')
        .then(res => res.data)
}
