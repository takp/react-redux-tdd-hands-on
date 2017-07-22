import * as actions from '../todos.js'

describe('todos action', () => {
    const todos = [
        {
            id: 1,
            title: 'todo1'
        }
    ]

    // fetchTodosSuccess
    describe('action creator', () => {
        it('creates FETCH_TODOS_SUCCESS', () => {
            expect(actions.fetchTodosSuccess(todos)).toEqual({
                type: 'FETCH_TODOS_SUCCESS',
                todos
            })
        })
    })

    // fetchTodos
    describe('fetchTodos', () => {
        it('returns action', () => {
            expect(actions.fetchTodos()).toEqual({
                type: 'FETCH_TODO',
                todos
            })
        })
    })
})
