import React from 'react';

function TodoItem({ todo, index, onDelete }) {
  return (
    <li>
      {todo}
      <button onClick={() => onDelete(index)}>X</button>
    </li>
  );
}

export default TodoItem;