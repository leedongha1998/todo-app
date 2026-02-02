import { useEffect, useRef, useState } from "react";

interface TimerPros {
  onFinish: () => void;
}

const INIT_TIME = 3;

const timeFormatter = (seconds: number): string => {
  const min = Math.floor(seconds / 60);
  const se = seconds % 60;
  const displayMin = String(min).padStart(2, "0");
  const displaySec = String(se).padStart(2, "0");

  return `${displayMin}:${displaySec}`;
};

const Timer = ({ onFinish }: TimerPros) => {
  const [time, setTime] = useState(INIT_TIME);
  const [isGo, setIsGo] = useState(false);

  // 1️⃣ 현재 시간을 기억할 Ref 생성
  // (State는 렌더링에 쓰이고, Ref는 로직 내부에서 최신값을 조회할 때 씁니다)
  const timeRef = useRef(time);

  const handleGo = () => {
    // 0초일 때는 시작되지 않도록 방어 로직 (선택사항)
    if (time <= 0 && !isGo) return;
    setIsGo(!isGo);
  };

  const initTime = () => {
    setIsGo(false);
    setTime(INIT_TIME);
  };

  // 2️⃣ 시간이 변할 때마다 Ref에 최신 시간 동기화
  useEffect(() => {
    timeRef.current = time;
  }, [time]);

  useEffect(() => {
    let timerId: number | null = null;

    if (isGo) {
      timerId = setInterval(() => {
        // 3️⃣ 여기서 Ref를 통해 "현재 시간"을 확인합니다.
        // time State를 직접 쓰면 의존성 배열 때문에 타이머가 계속 리셋되지만,
        // Ref는 리셋 없이 값만 읽어올 수 있습니다.
        if (timeRef.current <= 0) {
          clearInterval(timerId!); // 즉시 종료
          alert("종료");
          setIsGo(false); // 상태 변경 (이벤트 핸들러 취급됨 -> 에러 없음)
          onFinish(); // 부모에게 알림
          return;
        }

        // 시간이 남았으면 1초 감소
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isGo, onFinish]); // time이 의존성에서 빠져서 타이머가 안 끊김!

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
        {timeFormatter(time)}
      </div>
      <button onClick={handleGo}>{isGo ? "정지" : "시작"}</button>
      <button onClick={initTime} style={{ marginLeft: "10px" }}>
        초기화
      </button>
    </div>
  );
};

export default Timer;
