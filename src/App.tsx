import { useCallback, useEffect, useReducer, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { todoReducer } from "./reducers/todoReducer";
import Stats from "./components/Stats";
import type { Todo } from "./types";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  const loadTodos = (): Todo[] => {
    const saved = localStorage.getItem("todos");
    if (saved === null) return [];
    return JSON.parse(saved);
  };

  const [todos, dispatch] = useReducer(todoReducer, loadTodos());
  const [pomoCount, setPomoCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handlePomoCount = useCallback(() => {
    setPomoCount((prev) => prev + 1);
  }, []);

  const onAdd = useCallback((text: string) => {
    dispatch({
      type: "ADD",
      text,
      id: Date.now(),
    });
  }, []); // dispatch는 불변하므로 의존성 빈 배열 가능

  // 3️⃣ 토글 함수
  const handleToggle = useCallback((id: number) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  // 4️⃣ 삭제 함수
  const handleDelete = useCallback((id: number) => {
    dispatch({ type: "DELETE", id });
  }, []);

  return (
    <div className="container" data-theme={theme}>
      <div className="panel left-panel" style={{ display: "flex" }}>
        <Timer onFinish={handlePomoCount} />
        <Stats pomoCount={pomoCount} todos={todos} />
      </div>

      <div className="panel right-panel">
        <div className="todo-header">
          <h2>오늘의 할 일 (Tasks)</h2>
          <p>Manage your daily goals efficiently.</p>
        </div>
        <TodoInput onAdd={onAdd} />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
      <button onClick={toggleTheme}>테마 전환 : {theme}</button>
    </div>
  );
}

export default App;
