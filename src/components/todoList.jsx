import React from 'react'
import { connect } from 'react-redux'
import { FILTER_ALL, FILTER_COMPLETED } from '../redux/actionTypes'
import { toggleTodo } from '../redux/actions'

const Todo = ({ todo, id, toggleTodo }) => (
    <li className={todo.completed ? 'completed' : ''} onClick={() => toggleTodo(id)}>{todo.content}</li>
)

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.todos);

        return (
            Object.keys(this.props.todos).map(key => 
                  <Todo key={key} id={key} toggleTodo={this.props.toggleTodo} todo={this.props.todos[key]} />
                )
        );
    }
}

const mapState = (state) => {
    if (state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { todos: state.todos.data }
    } else if (state.visibilityFilter.activeFilter === FILTER_COMPLETED) {
        return ({
            todos: Object.keys(state.todos.data).filter(todo => todo.completed)
        })
    } else {
        var obj = Object.keys(state.todos.data);
        console.log(Object.keys(state.todos.data));
        return ({
            todos: Object.keys(state.todos.data).filter(todo => !todo.completed)
        })
    }
}

export default connect(mapState, { toggleTodo })(TodoList);
