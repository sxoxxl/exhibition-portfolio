/**
 * ProgressRail — 관람 동선(전체 스크롤 진행률)과 현재 전시실 번호를 보여주는
 * 화면 우측 고정 인디케이터. 실제 갤러리의 "관람 순서 안내"를 모사합니다.
 */
export default function ProgressRail({ progress, activeIndex, total }) {
  const current = String(activeIndex + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <div className="progress-rail" aria-hidden="true">
      <span className="progress-rail-index">
        <b>{current}</b> / {totalStr}
      </span>
      <div className="progress-rail-track">
        <div
          className="progress-rail-fill"
          style={{ height: `${Math.round(progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
