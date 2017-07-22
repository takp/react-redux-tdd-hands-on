// Ref: https://github.com/airbnb/enzyme

import TodoList from '../TodoList'
import React from 'react';
import { shallow } from 'enzyme';

describe('TodoList', () => {
    const wrapper = shallow(<TodoList />)
    it("has a 'ul.todo-list'", () => {
        expect(wrapper.find('.todo-list')).toHaveLength(1)
    })
})
