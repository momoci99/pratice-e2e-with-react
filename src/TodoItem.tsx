import React, { useState } from "react";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    isEditing: boolean;
  };
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, updatedText: string) => void;
  toggleEditTodo: (id: number) => void;
}

const TodoItem = ({
  todo,
  deleteTodo,
  updateTodo,
  toggleEditTodo,
}: TodoItemProps) => {
  const [editText, setEditText] = useState<string>(todo.text);

  return (
    <li data-testid="todo-item">
      {todo.isEditing ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => updateTodo(todo.id, editText)}>Save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <button onClick={() => toggleEditTodo(todo.id)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
