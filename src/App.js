import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
