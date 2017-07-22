import reducer from '../todos.js'

describe('todos reducer', () => {
    it('returns initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })
})
