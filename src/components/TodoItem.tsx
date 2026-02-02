// ============================================================
// 📚 학습 목표: Props로 데이터와 콜백 함수 받기
// ============================================================
//
// 이 컴포넌트에서 배울 핵심 개념:
// 1. Props 타입 정의: interface로 컴포넌트가 받을 props 명시
// 2. 구조 분해 할당: ({ todo, onToggle, onDelete })
// 3. 콜백 함수 호출: 이벤트 발생 시 부모에게 알림
// 4. 조건부 스타일링: done 상태에 따라 스타일 변경
//
// 📌 컴포넌트 설계 원칙:
// - TodoItem은 자신의 상태를 직접 관리하지 않습니다
// - 부모(App)가 상태를 관리하고, TodoItem은 표시와 이벤트 전달만 담당
// - 이를 "상태 끌어올리기(Lifting State Up)"라고 합니다
// ============================================================

import type { Todo } from "../types";

// ============================================================
// Props 타입 정의
// ============================================================
// 💡 힌트:
// - todo: 표시할 할 일 데이터
// - onToggle: 체크박스 클릭 시 호출 (id 전달)
// - onDelete: 삭제 버튼 클릭 시 호출 (id 전달)
// ============================================================
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// ============================================================
// 컴포넌트 구현
// ============================================================
// 💡 힌트: 구조 분해 할당으로 props를 받습니다
// const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => { ... }
// ============================================================
const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  // ============================================================
  // JSX 렌더링 (HTML/CSS 완성됨)
  // ============================================================
  return (
    <div className="todo-item">
      {/*
        체크박스:
        - checked: todo.done 상태와 연동
        - onChange: 클릭 시 onToggle(todo.id) 호출
      */}
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => {
          // TODO: onToggle(todo.id) 호출
        }}
      />

      {/*
        할 일 텍스트:
        - 완료되면 취소선 스타일 적용
        💡 힌트: 조건부 스타일링 사용
      */}
      <span
        style={{
          // TODO: todo.done이 true면 "line-through", 아니면 "none"
          textDecoration: "none",
        }}
      >
        {todo.text}
      </span>

      {/*
        삭제 버튼:
        - onClick: 클릭 시 onDelete(todo.id) 호출
      */}
      <button
        onClick={() => {
          // TODO: onDelete(todo.id) 호출
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
