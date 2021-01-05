import './../styles/App.css'

import React from 'react'
import Title from './Title'
import Form from './Form'
import ToDo from './ToDo'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ID: 0,
      todos: []
    }
  }

  CreateTask = (name) => {
    let task = {
      ID: this.state.ID,
      done: false,
      name: name
    }

    this.state.todos.push(task)
    this.setState({
      ID: this.state.ID + 1,
      todos: this.state.todos
    })
  }

  ChangeStatusTask = (ID, stat) => {
    let todos = this.state.todos.slice()
    todos.find(todo => todo.ID === ID).done = stat
    this.setState({
      todos: todos
    })
  }

  DeleteTask = (ID) => {
    let result = this.state.todos.filter(todo => todo.ID !== ID)
    this.setState({
      todos: result
    })
  }

  render() {
    return (
      <div className="app">
        <Title
          title="ToDo app"
        />
        <Form
          submit={this.CreateTask}
        />
        <ToDo
          todos={this.state.todos}
          delete={this.DeleteTask}
          change={this.ChangeStatusTask}
        />
      </div>
    );
  }
}

export default App;
