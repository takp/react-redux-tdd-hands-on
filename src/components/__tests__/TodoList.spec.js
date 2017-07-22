// Ref: https://github.com/airbnb/enzyme

import TodoList from '../TodoList'
import React from 'react';
import { mount } from 'enzyme';

describe('TodoList', () => {
    const todos = [
        {
            id: 1,
            title: 'todo1'
        },
        {
            id: 2,
            title: 'todo2'
        }
    ]

    const actions = {
        fetchTodos: jest.fn()
    }

    const wrapper = mount(<TodoList todos={todos} actions={actions} />)

    it("has a 'ul.todo-list'", () => {
        expect(wrapper.find('.todo-list')).toHaveLength(1)
    })

    it("has two todos", () => {
        const expected_text = wrapper.find('li').map(node => {
            return node.text()
        })
        expect(['todo1', 'todo2']).toEqual(expected_text)
    })

    it("should call once fetchTodos", () => {
        expect(actions.fetchTodos.mock.calls).toHaveLength(1)
    })
})
