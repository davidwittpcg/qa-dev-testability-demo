import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>(
    []
  );
  const [value, setValue] = useState("");

  const addTodo = () => {
    if (!value.trim()) return;
    setTodos([...todos, { text: value, completed: false }]);
    setValue("");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Demo Todo App</h1>

      <input
        data-testid="todo-input"
        placeholder="Add new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button data-testid="todo-add" onClick={addTodo}>
        Create
      </button>

      {/* VERSION A (vor Refactor): UL/LI */}
      {/*
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {todos.map((todo, index) => (
            <li
              key={index}
              data-testid={`todo-item-${index}`}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <label>
                <input
                  type="checkbox"
                  data-testid={`todo-toggle-${index}`}
                  checked={todo.completed}
                  onChange={() => {
                    const updated = [...todos];
                    updated[index].completed = !updated[index].completed;
                    setTodos(updated);
                  }}
                />
                <span data-testid={`todo-text-${index}`}>{todo.text}</span>
              </label>
            </li>
          ))}
        </ul>
      */}

      {/*VERSION B (nach Refactor): DIV Cards*/}
      {
        <div data-testid="todo-list">
          {todos.map((todo, index) => (
            <div
              key={index}
              data-testid={`todo-item-${index}`}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                display: "flex",
                gap: 8,
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <input
                type="checkbox"
                data-testid={`todo-toggle-${index}`}
                checked={todo.completed}
                onChange={() => {
                  const updated = [...todos];
                  updated[index].completed = !updated[index].completed;
                  setTodos(updated);
                }}
              />
              <span data-testid={`todo-text-${index}`}>{todo.text}</span>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
