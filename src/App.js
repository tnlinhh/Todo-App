import React, { useState } from 'react';
import './index.css';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;