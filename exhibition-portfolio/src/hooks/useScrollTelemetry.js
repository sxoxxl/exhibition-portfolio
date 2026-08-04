import { useEffect, useRef, useState } from "react";

/**
 * 전시 공간 전체의 관람 진행 상태를 추적합니다.
 * - progress: 0~1, 전체 스크롤 진행률 (관람 동선의 위치)
 * - activeIndex: 현재 뷰포트 중심에 가장 가까운 "전시실"의 인덱스
 *
 * DOM의 .room[data-index] 요소들을 관찰합니다. 컴포넌트 트리를 가로질러
 * ref를 넘기지 않아도 되도록 IntersectionObserver로 동작합니다.
 */
export function useScrollTelemetry(roomCount) {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollable = doc.scrollHeight - window.innerHeight;
        const p = scrollable > 0 ? window.scrollY / scrollable : 0;
        setProgress(Math.min(1, Math.max(0, p)));
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const rooms = Array.from(document.querySelectorAll(".room"));
    if (!rooms.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    rooms.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [roomCount]);

  return { progress, activeIndex };
}
