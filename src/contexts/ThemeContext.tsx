// ============================================================
// 📚 학습 목표: React Context API로 전역 상태 관리하기
// ============================================================
//
// Context는 props drilling 없이 컴포넌트 트리 전체에 데이터를 전달합니다.
// 테마(다크모드)처럼 앱 전체에서 사용되는 상태에 적합합니다.
//
// 📌 Context 패턴 3단계:
// 1. createContext()로 Context 생성
// 2. Provider 컴포넌트로 값 제공
// 3. useContext()로 값 사용 (커스텀 훅으로 감싸면 더 편리!)
// ============================================================

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// ============================================================
// Step 1: Context 타입 정의
// ============================================================
// Context가 제공할 값의 타입을 정의합니다.
//
// 💡 힌트:
// - theme: 현재 테마 ("light" 또는 "dark")
// - toggleTheme: 테마를 전환하는 함수
// ============================================================

type ThemeContextType = {
  // TODO: theme과 toggleTheme의 타입을 정의하세요
  // 힌트: theme: "light" | "dark";
  // 힌트: toggleTheme: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// ============================================================
// Step 2: Context 생성
// ============================================================
// createContext로 Context 객체를 생성합니다.
// 초기값은 undefined로 설정하고, 타입은 ThemeContextType | undefined
//
// 📝 작성해야 할 코드:
// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
// ============================================================

// TODO: createContext를 사용해 ThemeContext를 생성하세요
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ============================================================
// Step 3: Provider 컴포넌트 만들기
// ============================================================
// Provider는 Context 값을 하위 컴포넌트들에게 제공합니다.
//
// 💡 힌트:
// 1. useState로 theme 상태 관리 (초기값은 localStorage에서 불러오기)
// 2. useEffect로 theme이 바뀔 때마다 localStorage에 저장
// 3. toggleTheme 함수 구현 (light ↔ dark 전환)
// 4. ThemeContext.Provider로 값 제공
// ============================================================

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // TODO: useState로 theme 상태를 관리하세요
  // 💡 힌트: 초기값 함수에서 localStorage.getItem("theme")으로 저장된 테마 불러오기
  // const [theme, setTheme] = useState<"light" | "dark">(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   return savedTheme === "dark" ? "dark" : "light";
  // });

  // TODO: useEffect로 theme이 변경될 때 localStorage에 저장하세요
  // 💡 힌트: localStorage.setItem("theme", theme);

  // TODO: toggleTheme 함수를 구현하세요
  // 💡 힌트: setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleTheme = () => {
    // 테마 전환 로직 구현
  };

  // TODO: Provider로 theme과 toggleTheme을 제공하세요
  return (
    <ThemeContext.Provider
      value={{
        theme: "light", // TODO: 실제 theme 상태로 교체
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// ============================================================
// Step 4: 커스텀 훅 만들기
// ============================================================
// useContext를 직접 쓰는 대신 커스텀 훅으로 감싸면:
// 1. 사용하기 편리함
// 2. Provider 밖에서 사용 시 에러 처리 가능
//
// 📝 작성해야 할 코드:
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme은 ThemeProvider 안에서만 사용 가능");
//   }
//   return context;
// };
// ============================================================

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);

  // TODO: context가 undefined일 때 에러를 던지세요
  // 💡 힌트: if (!context) throw new Error("...");

  // TODO: context를 반환하세요 (타입 에러 해결 필요)
  return context!; // 임시로 ! 사용, 위에서 에러 처리하면 제거 가능
};
