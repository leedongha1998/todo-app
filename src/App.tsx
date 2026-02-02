// ============================================================
// 📚 학습 목표: useReducer, useCallback, useEffect로 앱 상태 관리
// ============================================================
//
// 이 컴포넌트는 앱의 "두뇌" 역할을 합니다.
// 모든 상태를 관리하고, 자식 컴포넌트들에게 데이터와 함수를 전달합니다.
//
// 배울 핵심 개념:
// 1. useReducer: 복잡한 상태(todos) 관리
// 2. useCallback: 함수 참조 안정화 (자식 컴포넌트 최적화용)
// 3. useEffect: 사이드 이펙트 (localStorage 저장)
// 4. useContext 커스텀 훅: 전역 상태(theme) 사용
// ============================================================

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
  // ============================================================
  // Step 1: 전역 상태(테마) 가져오기
  // ============================================================
  // 💡 힌트: ThemeContext에서 만든 useTheme 훅을 사용합니다
  //
  // 📝 작성해야 할 코드:
  // const { theme, toggleTheme } = useTheme();
  // ============================================================

  // TODO: useTheme 훅으로 theme과 toggleTheme을 가져오세요
  const { theme, toggleTheme } = useTheme();

  // ============================================================
  // Step 2: localStorage에서 todos 불러오기
  // ============================================================
  // 앱이 시작될 때 저장된 할 일 목록을 불러옵니다.
  //
  // 📝 작성해야 할 코드:
  // const loadTodos = (): Todo[] => {
  //   const saved = localStorage.getItem("todos");
  //   if (saved === null) return [];
  //   return JSON.parse(saved);
  // };
  // ============================================================

  const loadTodos = (): Todo[] => {
    // TODO: localStorage에서 "todos" 항목을 불러오세요
    // 힌트: localStorage.getItem("todos")
    // 힌트: 없으면 빈 배열 반환, 있으면 JSON.parse()
    return [];
  };

  // ============================================================
  // Step 3: useReducer로 todos 상태 관리
  // ============================================================
  // useState 대신 useReducer를 사용하면:
  // - 상태 변경 로직이 reducer 함수에 집중됨
  // - 복잡한 상태 업데이트를 깔끔하게 처리
  //
  // 📝 작성해야 할 코드:
  // const [todos, dispatch] = useReducer(todoReducer, loadTodos());
  // ============================================================

  // TODO: useReducer를 사용해 todos 상태를 관리하세요
  // 힌트: const [todos, dispatch] = useReducer(todoReducer, loadTodos());

  // 임시 하드코딩 (위 TODO 완료 후 삭제)
  const todos: Todo[] = [];
  const dispatch = (action: unknown) => {
    console.log("dispatch:", action);
  };

  // ============================================================
  // Step 4: 뽀모도로 카운터 상태
  // ============================================================
  // 타이머가 완료될 때마다 1씩 증가하는 카운터
  //
  // 📝 작성해야 할 코드:
  // const [pomoCount, setPomoCount] = useState(0);
  // ============================================================

  // TODO: pomoCount 상태를 정의하세요
  // const [pomoCount, setPomoCount] = useState(0);

  // 임시 하드코딩 (위 TODO 완료 후 삭제)
  const pomoCount = 0;

  // ============================================================
  // Step 5: useEffect로 todos를 localStorage에 저장
  // ============================================================
  // todos가 변경될 때마다 자동으로 저장됩니다.
  //
  // 📝 작성해야 할 코드:
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);
  // ============================================================

  // TODO: todos가 변경될 때 localStorage에 저장하세요

  // ============================================================
  // Step 6: 콜백 함수들 (useCallback으로 최적화)
  // ============================================================
  // useCallback은 함수의 "참조"를 기억합니다.
  // 매 렌더링마다 새 함수가 만들어지는 것을 방지합니다.
  //
  // ❓ 왜 필요한가요?
  // React.memo로 감싼 자식 컴포넌트는 props가 변경될 때만 리렌더링됩니다.
  // 함수 props가 매번 새로 만들어지면 React.memo가 소용없어집니다.
  // ============================================================

  // 뽀모도로 완료 시 호출
  const handlePomoCount = useCallback(() => {
    // TODO: setPomoCount((prev) => prev + 1);
  }, []);

  // 할 일 추가
  const onAdd = useCallback((text: string) => {
    // TODO: dispatch({ type: "ADD", text, id: Date.now() });
  }, []);

  // 할 일 토글
  const handleToggle = useCallback((id: number) => {
    // TODO: dispatch({ type: "TOGGLE", id });
  }, []);

  // 할 일 삭제
  const handleDelete = useCallback((id: number) => {
    // TODO: dispatch({ type: "DELETE", id });
  }, []);

  // ============================================================
  // JSX 렌더링 (HTML/CSS 완성됨)
  // ============================================================
  return (
    <div className="container" data-theme={theme}>
      {/* 왼쪽 패널: 타이머 + 통계 */}
      <div className="panel left-panel" style={{ display: "flex" }}>
        <Timer onFinish={handlePomoCount} />
        <Stats pomoCount={pomoCount} todos={todos} />
      </div>

      {/* 오른쪽 패널: 할 일 입력 + 목록 */}
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

      {/* 테마 전환 버튼 */}
      <button onClick={toggleTheme}>테마 전환 : {theme}</button>
    </div>
  );
}

export default App;
