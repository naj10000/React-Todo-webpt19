import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            todo: ''
        }
    }

    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitTodo = e => {
        e.preventDefault();
        this.setState({ todo: ''});
        this.props.addTodo(e, this.state.todo)

    }

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                type="text"
                value={this.state.todo}
                name="todo"
                onChange={this.handleChanges}
                
                />
                <button>Add</button>
                <button  onClick={this.props.clearCompleted}>
                Clear Completed
            </button>
            </form>
        )
    }
}