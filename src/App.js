import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import './components/Todo.css'
const todos = [
  {
    task: 'meditate',
    id: 123,
    completed: false
  },
  {
    task: 'workout',
    id: 124,
    completed: false
  },
  {
    task: 'take cold shower',
    id: 125,
    completed: false
  },

  {
    task: 'do code challenges',
    id: 126,
    completed: false
  }

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos
    }
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  //toggle Item completed
  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todoId === todo.id){
          return {
            ...todo, 
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }




  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
        </div>
        <TodoList
        todos={this.state.todos}
        toggleTodo={this.toggleTodo}

        />
      </div>
    );
  }
}

export default App;
