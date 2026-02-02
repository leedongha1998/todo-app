import { useMemo } from "react";
import type { Todo } from "../types";

interface StatsProps {
  pomoCount: number;
  todos: Todo[];
}

const Stats = ({ pomoCount, todos }: StatsProps) => {
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((t) => t.done).length;
    const remaining = total - completed;

    return { total, completed, remaining };
  }, [todos]);

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
