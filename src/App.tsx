import { useState } from "react";
import "./App.css";

import TodoItem from "./TodoItem";
import { Button, Input, Typography } from "@mui/material";

interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // Todo 추가
  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTask: Todo = {
      id: Date.now(),
      text: newTodo,
      isEditing: false,
    };
    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  // Todo 삭제
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Todo 수정
  const updateTodo = (id: number, updatedText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText, isEditing: false } : todo
      )
    );
  };

  // Todo 수정 모드 토글
  const toggleEditTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h1">Simple Todo App</Typography>
      <div>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        ></Input>
        <Button onClick={addTodo}>Add</Button>
      </div>
      <ul data-testid="todo-item-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            toggleEditTodo={toggleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
