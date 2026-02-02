import type { Todo } from "../types";
export type TodoAction =
  | { type: "ADD"; text: string; id: number }
  | { type: "DELETE"; id: number }
  | { type: "TOGGLE"; id: number };

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD":
      // 기존 배열 끝에 새로운 할 일 객체를 추가한 '새 배열'을 반환합니다.
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];

    case "DELETE":
      // filter를 사용해 해당 id만 제외된 '새 배열'을 만듭니다.
      return state.filter((todo) => todo.id !== action.id);

    case "TOGGLE":
      // map을 사용해 전체를 훑으면서, id가 일치하는 항목만 done을 반전시킵니다.
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
}