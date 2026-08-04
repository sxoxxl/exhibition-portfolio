import { useEffect, useRef, useState } from "react";

/**
 * Room — 전시실 하나를 표현하는 공용 래퍼.
 * 뷰포트에 20% 이상 들어오면 서서히 떠오르듯 등장합니다 (fade + rise).
 *
 * props:
 *  - index: 전시실 번호 (0부터)
 *  - total: 전체 전시실 수
 *  - label: 도슨트 라벨 (예: "ENTRANCE")
 *  - id: 앵커/네비게이션용 id
 */
export default function Room({
  index,
  total,
  label,
  id,
  className = "",
  backdrop = null,
  children,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(index === 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const num = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <section
      ref={ref}
      id={id}
      data-index={index}
      className={`room ${visible ? "is-visible" : ""} ${className}`}
      aria-label={label}
    >
      {backdrop}
      <div className="room-label" aria-hidden="true">
        <b>
          {num} / {totalStr}
        </b>
        <span>{label}</span>
      </div>
      <div className="room-inner">{children}</div>
    </section>
  );
}
