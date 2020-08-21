import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER, FILTER_ALL } from './actionTypes'

const initialTodoState = {
    nextId: 2,
    data: {
        1: {
            content: "Content",
            completed: false
        }
    }
}

export function todos(state = initialTodoState, action) {
    switch (action.type) {
        case ADD_TODO:
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [state.nextId]: {
                            completer: false,
                            content: action.payload.content
                        },
                    },

                    nextId: state.nextId + 1
                }
            );
        case TOGGLE_TODO:
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [action.payload.id]: {
                            ...state.data[action.payload.id],
                            completed: !(state.data[action.payload.id].completed)
                        }
                    }
                }
            );
        default: {
            return state
        }
    }
}

export function visibilityFilter(state = { activeFilter: FILTER_ALL }, action) {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.payload.filter
            })
        }

        default: {
            return state;
        }
    }
}