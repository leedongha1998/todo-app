// ============================================================
// 📚 학습 목표: useReducer를 위한 Reducer 함수 만들기
// ============================================================
//
// Reducer는 "현재 상태"와 "액션"을 받아서 "새로운 상태"를 반환하는 순수 함수입니다.
// 복잡한 상태 로직을 한 곳에서 관리할 수 있어 코드가 깔끔해집니다.
//
// 📌 Reducer 패턴:
// function reducer(state, action) {
//   switch (action.type) {
//     case "액션이름":
//       return 새로운상태;
//     default:
//       return state;
//   }
// }
// ============================================================

import type { Todo } from "../types";

// ============================================================
// Step 1: 액션 타입 정의하기
// ============================================================
// 할 일 관리에는 3가지 액션이 필요합니다:
// - ADD: 새 할 일 추가 (text와 id가 필요)
// - DELETE: 할 일 삭제 (id가 필요)
// - TOGGLE: 완료 상태 변경 (id가 필요)
//
// 💡 힌트: Union 타입(|)을 사용해 여러 액션을 하나의 타입으로 묶습니다
//
// 📝 작성해야 할 코드:
// export type TodoAction =
//   | { type: "ADD"; text: string; id: number }
//   | { type: "DELETE"; id: ??? }
//   | { type: "TOGGLE"; id: ??? };
// ============================================================

export type TodoAction =
  // TODO: 여기에 3가지 액션 타입을 Union(|)으로 정의하세요
  // 힌트: { type: "ADD"; text: string; id: number } | { type: "DELETE"; ... } | ...
  { type: string };

// ============================================================
// Step 2: Reducer 함수 구현하기
// ============================================================
// 각 액션 타입에 따라 적절한 새 상태를 반환합니다.
// ⚠️ 중요: 원본 배열을 수정하지 말고, 항상 새 배열을 반환해야 합니다!
//
// 💡 힌트:
// - ADD: 스프레드 연산자로 새 항목 추가 [...state, { id, text, done: false }]
// - DELETE: filter() 메서드로 해당 id 제외
// - TOGGLE: map() 메서드로 해당 id의 done 값 반전
// ============================================================

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD":
      // TODO: 새 할 일을 추가한 새 배열을 반환하세요
      // 힌트: return [...state, { id: action.id, text: action.text, done: false }];
      return state;

    case "DELETE":
      // TODO: 해당 id를 제외한 새 배열을 반환하세요
      // 힌트: return state.filter((todo) => todo.id !== action.id);
      return state;

    case "TOGGLE":
      // TODO: 해당 id의 done 값을 반전시킨 새 배열을 반환하세요
      // 힌트: map을 사용해서 id가 일치하면 done을 반전, 아니면 그대로
      return state;

    default:
      return state;
  }
}
