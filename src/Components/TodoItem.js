import React, { useState } from "react"

function TodoItem(props) {
  const [complete, setComplete] = useState(props.isCompleted)
  const id = props.id;
  const index = props.index;

  function handleChange(id) {
    setComplete(complete => !complete)
  }

  const isCompleted = complete ? "complete" : "incomplete"

  return (
    <div className={`todo-item ${isCompleted}`}>
        <input
          type="checkbox"
          checked={complete} 
          onChange={() => handleChange(id)} 
        />
        <p>{props.text}</p>
        <button className="btn-remove" onClick={() => props.removeTodo(index)}>x</button>
    </div>
  )
}

export default TodoItem