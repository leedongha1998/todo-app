// ============================================================
// 📚 학습 목표: React 앱의 진입점과 Provider 패턴 이해하기
// ============================================================
//
// main.tsx는 React 앱이 시작되는 곳입니다.
//
// 핵심 개념:
// 1. createRoot: React 18의 새로운 렌더링 API
// 2. Provider 패턴: Context를 앱 전체에 제공
//
// 📌 Provider 순서가 중요한가요?
// 여러 Provider를 중첩할 때, 안쪽 Provider가 바깥쪽 Provider의 값을 사용할 수 있습니다.
// 예: ThemeProvider 안에 있는 컴포넌트만 useTheme을 사용 가능
// ============================================================

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";

// ============================================================
// 앱 렌더링
// ============================================================
//
// 📝 작성해야 할 코드:
// createRoot(document.getElementById("root")!).render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>
// );
//
// 💡 힌트:
// - document.getElementById("root")!: HTML의 #root 요소를 찾음
// - ! (non-null assertion): TypeScript에게 "null이 아님"을 보장
// - ThemeProvider로 App을 감싸서 theme 상태를 전체에 제공
// ============================================================

// TODO: ThemeProvider로 App을 감싸서 렌더링하세요
createRoot(document.getElementById("root")!).render(
  // 힌트: <ThemeProvider>로 <App />을 감싸세요
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
