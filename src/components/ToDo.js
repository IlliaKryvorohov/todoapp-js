import './../styles/ToDo.css'

import React from 'react'

const ToDoItem = (props) => {

  const click = () => {
    props.delete(props.id)
  }

  const change = () => {
    props.change(props.id, !props.done)
  }

  return (
    <div className="todo">
      <p
        onClick={change}
        className={props.done ? "done" : null}
      >{props.text}</p>
      <button onClick={click}>Close</button>
    </div>
  )
}

const ToDo = (props) => {
  return (
    <div className="todos">
      {props.todos.map(todo => (
        <ToDoItem
          key={todo.ID}
          text={todo.name}
          done={todo.done}
          delete={props.delete}
          id={todo.ID}
          change={props.change}
        />
      ))}
    </div>
  )
}

export default ToDo