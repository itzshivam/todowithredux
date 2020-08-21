import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './actionTypes'

export function addTodo(content) {
    return (
        {
            type: ADD_TODO,
            payload: {
                content
            }
        }
    );
}


export function toggleTodo(id) {
    return (
        {
            type: TOGGLE_TODO,
            payload: {
                id
            }
        });
}

export function deleteTodo(id) {
    return (
        {
            type: DELETE_TODO,
            payload: {
                id
            }
        }
    );
}

export function setFilter(filter) {
    return (
        {
            type: SET_FILTER,
            payload: {
                filter
            }
        }
    );
}