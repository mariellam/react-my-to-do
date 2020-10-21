import React, {useState} from 'react';
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  let isCompleted = false;

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
    console.log(newTodos)
  };

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, i) => <TodoItem key={i} index={i} text={todo.text} isCompleted={isCompleted} removeTodo={removeTodo} />)}
    </div>  
  );
}

export default App;
