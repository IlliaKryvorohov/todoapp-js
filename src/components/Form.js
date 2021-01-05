import './../styles/Form.css'

import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  addToDo = () => {
    let name = this.input.current.value
    if (name) {
      this.input.current.value = ""
      this.props.submit(name)
    }
    
  }

  render() {
    return (
      <div className="form">
        <input
          type="text"
          ref={this.input}
        />
        <button onClick={this.addToDo}>ADD</button>
      </div>
    )
  }
}

export default Form