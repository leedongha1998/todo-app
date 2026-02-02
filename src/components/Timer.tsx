// ============================================================
// 📚 학습 목표: useEffect와 useRef로 타이머 만들기
// ============================================================
//
// 이 컴포넌트에서 배울 핵심 개념:
// 1. useEffect: 사이드 이펙트(타이머) 관리
// 2. useRef: 렌더링과 무관하게 값 유지 (타이머 내부에서 최신 값 참조)
// 3. setInterval/clearInterval: 타이머 시작/정리
//
// ⚠️ 중요한 개념:
// - useState의 값은 렌더링 시점의 "스냅샷"
// - useRef의 값은 항상 "최신" 값을 유지
// - 타이머 콜백 내에서 최신 값이 필요하면 useRef를 사용!
// ============================================================

import { useState, useEffect, useRef } from "react";

// 타이머 Props 타입 정의
interface TimerProps {
  onFinish: () => void; // 타이머 종료 시 호출될 콜백
}

// 초기 시간 (초 단위) - 테스트용으로 3초, 실제로는 25분(1500초) 사용
const INIT_TIME = 3;

// ============================================================
// 시간 포맷 함수 (초 → "MM:SS" 형식)
// ============================================================
// 💡 힌트:
// - Math.floor(seconds / 60)로 분 계산
// - seconds % 60으로 초 계산
// - String().padStart(2, "0")로 2자리 맞추기
// ============================================================
const timeFormatter = (seconds: number): string => {
  // TODO: 초를 "MM:SS" 형식으로 변환하세요
  // 힌트: const min = Math.floor(seconds / 60);
  // 힌트: const sec = seconds % 60;
  // 힌트: return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  return "00:00";
};

const Timer = ({ onFinish }: TimerProps) => {
  // ============================================================
  // Step 1: 상태 정의
  // ============================================================
  // 💡 힌트:
  // - time: 남은 시간 (초)
  // - isGo: 타이머 실행 중 여부
  // ============================================================

  // TODO: time 상태를 정의하세요 (초기값: INIT_TIME)
  // const [time, setTime] = useState(INIT_TIME);

  // TODO: isGo 상태를 정의하세요 (초기값: false)
  // const [isGo, setIsGo] = useState(false);

  // 임시 하드코딩 (위 TODO 완료 후 삭제)
  const time = INIT_TIME;
  const isGo = false;

  // ============================================================
  // Step 2: useRef로 현재 시간 추적
  // ============================================================
  // ❓ 왜 useRef가 필요한가요?
  //
  // setInterval 콜백은 생성 시점의 state 값을 "캡처"합니다.
  // 예: time이 10일 때 setInterval을 시작하면,
  //     콜백 내부의 time은 계속 10으로 보입니다.
  //
  // useRef는 렌더링과 무관하게 항상 최신 값을 유지하므로,
  // 타이머 콜백에서 현재 시간을 정확히 확인할 수 있습니다.
  // ============================================================

  // TODO: timeRef를 생성하세요
  // const timeRef = useRef(time);
  const timeRef = useRef(INIT_TIME);

  // ============================================================
  // Step 3: 버튼 핸들러 함수들
  // ============================================================

  // 시작/정지 버튼 핸들러
  const handleGo = () => {
    // TODO: isGo 상태를 토글하세요
    // 💡 힌트: 0초일 때는 시작하지 않도록 방어 로직 추가
    // if (time <= 0 && !isGo) return;
    // setIsGo(!isGo);
  };

  // 초기화 버튼 핸들러
  const initTime = () => {
    // TODO: 타이머를 초기 상태로 되돌리세요
    // 💡 힌트: setIsGo(false); setTime(INIT_TIME);
  };

  // ============================================================
  // Step 4: useEffect로 timeRef 동기화
  // ============================================================
  // time이 변경될 때마다 timeRef도 업데이트해야 합니다.
  //
  // 📝 작성해야 할 코드:
  // useEffect(() => {
  //   timeRef.current = time;
  // }, [time]);
  // ============================================================

  // TODO: time이 변경될 때 timeRef.current를 업데이트하세요

  // ============================================================
  // Step 5: useEffect로 타이머 로직 구현 ⭐ 핵심!
  // ============================================================
  // isGo가 true일 때만 setInterval로 매초 카운트다운
  //
  // 💡 중요 포인트:
  // 1. setInterval로 1초마다 콜백 실행
  // 2. timeRef.current로 현재 시간 확인 (state 아님!)
  // 3. 0초가 되면 타이머 정지 + onFinish 호출
  // 4. cleanup 함수에서 clearInterval로 정리
  //
  // 📝 작성해야 할 코드:
  // useEffect(() => {
  //   let timerId: number | null = null;
  //
  //   if (isGo) {
  //     timerId = setInterval(() => {
  //       // timeRef.current로 현재 시간 확인
  //       if (timeRef.current <= 0) {
  //         clearInterval(timerId!);
  //         alert("종료!");
  //         setIsGo(false);
  //         onFinish();
  //         return;
  //       }
  //       // 1초 감소
  //       setTime((prev) => prev - 1);
  //     }, 1000);
  //   }
  //
  //   // Cleanup: 컴포넌트 언마운트 또는 isGo 변경 시 타이머 정리
  //   return () => {
  //     if (timerId) clearInterval(timerId);
  //   };
  // }, [isGo, onFinish]); // ⚠️ time을 의존성에서 제외!
  // ============================================================

  // TODO: 위 주석을 참고해 타이머 useEffect를 구현하세요

  // ============================================================
  // JSX 렌더링 (HTML/CSS 완성됨)
  // ============================================================
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* 시간 표시 */}
      <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
        {timeFormatter(time)}
      </div>

      {/* 시작/정지 버튼 */}
      <button onClick={handleGo}>{isGo ? "정지" : "시작"}</button>

      {/* 초기화 버튼 */}
      <button onClick={initTime} style={{ marginLeft: "10px" }}>
        초기화
      </button>
    </div>
  );
};

export default Timer;
