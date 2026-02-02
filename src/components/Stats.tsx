// ============================================================
// 📚 학습 목표: useMemo로 계산 결과 캐싱하기
// ============================================================
//
// useMemo는 비용이 큰 계산 결과를 "기억"해두는 훅입니다.
// 의존성이 변경될 때만 다시 계산하고, 그렇지 않으면 캐시된 값을 반환합니다.
//
// 📌 언제 useMemo를 사용하나요?
// - 배열 필터링/계산 등 비용이 큰 연산
// - 자식 컴포넌트에 객체를 props로 전달할 때 (불필요한 리렌더 방지)
//
// ⚠️ 주의: 모든 곳에 useMemo를 쓰면 오히려 성능이 나빠질 수 있어요!
// 정말 필요한 곳에만 사용하세요.
// ============================================================

import { useMemo } from "react";
import type { Todo } from "../types";

// ============================================================
// Props 타입 정의
// ============================================================
interface StatsProps {
  pomoCount: number; // 완료한 뽀모도로 횟수
  todos: Todo[]; // 할 일 목록
}

const Stats = ({ pomoCount, todos }: StatsProps) => {
  // ============================================================
  // useMemo로 통계 계산 (todos가 변경될 때만 재계산)
  // ============================================================
  //
  // 💡 힌트:
  // - total: 전체 할 일 개수 (todos.length)
  // - completed: 완료된 할 일 개수 (filter로 done === true인 것만)
  // - remaining: 남은 할 일 개수 (total - completed)
  //
  // 📝 작성해야 할 코드:
  // const stats = useMemo(() => {
  //   const total = todos.length;
  //   const completed = todos.filter((t) => t.done).length;
  //   const remaining = total - completed;
  //   return { total, completed, remaining };
  // }, [todos]); // todos가 변경될 때만 재계산
  // ============================================================

  // TODO: useMemo를 사용해 stats를 계산하세요
  const stats = useMemo(() => {
    // 힌트: todos 배열을 분석해서 통계를 계산하세요
    return {
      total: 0, // TODO: todos.length
      completed: 0, // TODO: todos.filter((t) => t.done).length
      remaining: 0, // TODO: total - completed
    };
  }, [todos]);

  // ============================================================
  // JSX 렌더링 (HTML/CSS 완성됨)
  // ============================================================
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h3>📊 통계</h3>
        <p>🍅 완료한 뽀모도로: {pomoCount}개</p>
        <p>
          ✅ 완료한 할 일: {stats.completed}/{stats.total}
        </p>
        <p>⏳ 남은 할 일: {stats.remaining}개</p>
      </div>
    </>
  );
};

export default Stats;
