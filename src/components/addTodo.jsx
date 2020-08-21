import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todoInput: ""};
    }

    handleOnChange(value){
        this.setState({todoInput: value});
    }

    handleAdd() {
        this.props.addTodo(this.state.todoInput);
        this.setState({todoInput: ""});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={e => this.handleOnChange(e.target.value)} value={this.state.todoInput} placeholder="You text here" />
                <button onClick={e => this.handleAdd()}>Add</button>
                <br></br>
            </div>
        );
    }
}

export default connect(null, { addTodo })(AddTodo)