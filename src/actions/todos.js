import * as api from '../api'

export const fetchTodosSuccess = (todos) => {
    return {
        type: 'FETCH_TODOS_SUCCESS',
        todos
    }
}


/*
 function incrementIfOdd() {
 return (dispatch, getState) => {
 const { counter } = getState();

 if (counter % 2 === 0) {
 return;
 }

 dispatch(increment());
 };
 }
 */

export const fetchTodos = () => (dispatch, getState) => {
    return api.fetchTodos()
        .then(res => dispatch(fetchTodosSuccess(res)))
}
