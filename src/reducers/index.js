// Ref: http://redux.js.org/docs/api/combineReducers.html

import { combineReducers } from 'redux'
import todos from './todos'

export default combineReducers({
    todos,
})
