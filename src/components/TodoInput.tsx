// ============================================================
// 📚 학습 목표: useState로 입력 폼 관리하기
// ============================================================
//
// 이 컴포넌트에서 배울 핵심 개념:
// 1. useState: 입력값 상태 관리
// 2. 제어 컴포넌트 (Controlled Component): value + onChange 패턴
// 3. 이벤트 핸들러: onChange, onKeyDown, onClick
// 4. Props로 함수 전달받기: onAdd 콜백
//
// 📌 제어 컴포넌트란?
// React state가 "진실의 원천(Single Source of Truth)"이 되어
// input의 value를 직접 제어하는 패턴입니다.
// ============================================================

import React, { useState } from "react";

// ============================================================
// Props 타입 정의
// ============================================================
// 💡 힌트: 부모 컴포넌트에서 전달받을 함수의 타입을 정의합니다
interface TodoInputProps {
  onAdd: (text: string) => void; // 할 일 추가 시 호출될 콜백
}

const TodoInput = ({ onAdd }: TodoInputProps) => {
  // ============================================================
  // Step 1: 입력값 상태 정의
  // ============================================================
  // 💡 힌트: 빈 문자열로 초기화된 상태가 필요합니다
  //
  // 📝 작성해야 할 코드:
  // const [inputValue, setInputValue] = useState("");
  // ============================================================

  // TODO: inputValue 상태를 정의하세요
  // const [inputValue, setInputValue] = useState("");

  // 임시 하드코딩 (위 TODO 완료 후 삭제)
  const inputValue = "";

  // ============================================================
  // Step 2: 제출 핸들러 구현
  // ============================================================
  // 💡 힌트:
  // 1. 빈 문자열이면 아무것도 하지 않음 (trim으로 공백 제거 후 체크)
  // 2. onAdd 콜백 호출
  // 3. 입력값 초기화
  // ============================================================
  const handleSubmit = (): void => {
    // TODO: 입력값이 비어있으면 early return
    // 힌트: if (inputValue.trim() === "") return;

    // TODO: 부모에게 입력값 전달
    // 힌트: onAdd(inputValue);

    // TODO: 입력값 초기화
    // 힌트: setInputValue("");
  };

  // ============================================================
  // Step 3: 키보드 이벤트 핸들러 구현
  // ============================================================
  // 💡 힌트: Enter 키를 누르면 handleSubmit 실행
  //
  // 📝 작성해야 할 코드:
  // const handleKeyDown = (e: React.KeyboardEvent) => {
  //   if (e.key === "Enter") handleSubmit();
  // };
  // ============================================================
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // TODO: Enter 키 감지해서 handleSubmit 호출
  };

  // ============================================================
  // JSX 렌더링 (HTML/CSS 완성됨)
  // ============================================================
  return (
    <div className="input-container">
      {/*
        제어 컴포넌트 패턴:
        - value={inputValue}: state가 input의 값을 제어
        - onChange: 입력할 때마다 state 업데이트
      */}
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={(e) => {
          // TODO: setInputValue(e.target.value)
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoInput;
