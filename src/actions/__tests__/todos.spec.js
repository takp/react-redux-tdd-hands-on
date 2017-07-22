import * as actions from '../todos.js'

describe('todos action', () => {
    // fetchTodos
    describe('fetchTodos', () => {
        const todos = [
            {
                id: 1,
                title: 'todo1'
            }
        ]

        it('returns action', () => {
            expect(actions.fetchTodos()).toEqual({
                type: 'FETCH_TODO',
                todos
            })
        })
    })
})
