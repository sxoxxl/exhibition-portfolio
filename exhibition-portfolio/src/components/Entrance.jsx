import { useEffect, useRef, useState } from "react";
import Room from "./Room.jsx";
import posterLandscape from "../assets/entrance-poster.webp";
import posterPortrait from "../assets/entrance-poster-portrait.webp";
import { entrancePoster } from "../data/content.js";

/**
 * ─────────────────────────────────────────────────────────────
 *  ENTRANCE — 전시장 입구에 걸린 포스터
 * ─────────────────────────────────────────────────────────────
 *  이 화면은 Hero Section이 아니라 하나의 "전시물"입니다.
 *
 *  - 포스터는 배경 이미지가 아니라 벽에 걸린 판(plate)으로 존재합니다.
 *  - 가만히 두면 거의 정지해 있습니다. 미세한 그레인, 아주 옅은 먼지,
 *    오른쪽 빛의 느린 흔들림만 있습니다.
 *  - 스크롤하면 페이지가 위로 밀려 올라가는 대신, 포스터가 벽에서 떨어져
 *    Z축 뒤로 물러나고 그 뒤의 어둠(전시장 안)이 열립니다.
 *
 *  스크롤 진행도는 CSS 변수 --enter (0 → 1) 로 내려보내고,
 *  변형은 ref로 직접 씁니다. (매 프레임 리렌더를 피하기 위해)
 * ─────────────────────────────────────────────────────────────
 */

/** 먼지 입자 — 무작위 대신 고정값. 매 렌더마다 위치가 튀지 않도록. */
const DUST = [
  { x: 8, y: 22, s: 2.0, dur: 46, delay: -3, dx: 26, dy: -60 },
  { x: 17, y: 71, s: 1.4, dur: 58, delay: -22, dx: -18, dy: -74 },
  { x: 24, y: 12, s: 1.1, dur: 51, delay: -37, dx: 34, dy: -48 },
  { x: 31, y: 58, s: 2.4, dur: 63, delay: -11, dx: -24, dy: -82 },
  { x: 38, y: 88, s: 1.3, dur: 44, delay: -29, dx: 20, dy: -66 },
  { x: 45, y: 34, s: 1.8, dur: 55, delay: -6, dx: -30, dy: -52 },
  { x: 52, y: 77, s: 1.2, dur: 49, delay: -41, dx: 16, dy: -70 },
  { x: 59, y: 19, s: 2.2, dur: 67, delay: -15, dx: -22, dy: -58 },
  { x: 66, y: 63, s: 1.5, dur: 42, delay: -33, dx: 28, dy: -76 },
  { x: 72, y: 41, s: 1.0, dur: 60, delay: -8, dx: -14, dy: -50 },
  { x: 79, y: 84, s: 2.1, dur: 53, delay: -25, dx: 22, dy: -64 },
  { x: 85, y: 28, s: 1.6, dur: 47, delay: -18, dx: -26, dy: -80 },
  { x: 91, y: 68, s: 1.3, dur: 64, delay: -2, dx: 18, dy: -56 },
  { x: 96, y: 47, s: 1.9, dur: 50, delay: -39, dx: -20, dy: -72 },
];

/**
 * 포스터가 걸린 "벽"의 잉크 면(188 bytes).
 * 포스터를 32px로 줄인 것으로, 화면 크기로 늘리면 그 자체가 흐릿한 색면이 됩니다.
 * CSS blur 필터 없이 벽을 채우기 위한 것이라 스크롤 중에도 비용이 거의 없습니다.
 * 포스터 이미지가 로드되기 전의 자리표시자 역할도 겸합니다.
 */
const FIELD =
  "data:image/webp;base64,UklGRrgAAABXRUJQVlA4IKwAAABQBQCdASogABIAPqVCnEmmJCMhMAwAwBSJQBajUGSxg08MBnK3dWi8iFZjCK1UOqKKlwAA8qQIdvi6mWkojuu35vkoRtWSC7FSabU9U3xuNim8AbeqmgJD+rmNtsnzLnf+z7ZqRIAPzFhnrqpK6FVLYgt5ejRv+IA62W7vzzjAJVUTrx61YXR9AH7SOF7HjHQJYLuKe7gmt/+R0JryyXKmucQf8PlgzNV8ngAA";

export default function Entrance({ index, total }) {
  const stageRef = useRef(null);
  const plateRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    const plate = plateRef.current;
    const section = stage?.closest(".room");
    if (!stage || !plate || !section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = null;

    const apply = () => {
      raf = null;

      // 이 전시실(입구 스테이지) 안에서의 진행도 0 → 1
      const travel = section.offsetHeight - window.innerHeight;
      const p =
        travel > 0
          ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / travel))
          : 0;

      // smoothstep — 시작과 끝이 부드럽게 멎도록
      const e = p * p * (3 - 2 * p);

      // 포스터가 벽에서 떨어져 뒤로 물러난다. (위로 올라가지 않는다)
      //
      // 원근(perspective + translateZ) 대신 scale을 쓴다.
      // 판이 한 장뿐이라 보이는 결과는 같은데, 3D 문맥을 만들지 않아
      // 스크롤하는 동안 브라우저가 할 일이 줄어든다.
      // transform만 건드리므로 레이아웃은 다시 계산되지 않는다.
      plate.style.transform = reduceMotion
        ? "none"
        : `scale(${(1 - 0.2 * e).toFixed(4)})`;

      // 어두워짐 · 그림자 · 안쪽의 어둠은 CSS가 --enter를 보고 처리한다
      stage.style.setProperty("--enter", e.toFixed(4));

      // 관람 UI(진행 레일)는 전시장에 들어선 뒤에야 나타난다
      document.documentElement.classList.toggle("has-entered", p > 0.5);
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-entered");
    };
  }, []);

  const stage = (
    <div className="entrance-stage" ref={stageRef}>
      {/* 벽에 걸린 포스터 판 */}
      <div className={`entrance-plate ${loaded ? "is-ready" : ""}`} ref={plateRef}>
        {/* 포스터가 걸린 벽면. 포스터의 잉크가 화면 끝까지 이어지도록 한다. */}
        <div
          className="entrance-field"
          style={{ backgroundImage: `url(${FIELD})` }}
          aria-hidden="true"
        />
        {/*
          포스터 원본.
          화면 방향에 따라 가로판 · 세로판을 바꿔 건다.
          어느 쪽이든 잘라내지 않고 인쇄물 전체를 보여준다.
          (source가 하나만 내려받아지므로 두 장을 모두 받지 않는다)
        */}
        <picture>
          <source media="(orientation: portrait)" srcSet={posterPortrait} />
          <img
            className={`entrance-poster ${loaded ? "is-loaded" : ""}`}
            src={posterLandscape}
            alt={entrancePoster.alt}
            decoding="async"
            fetchPriority="high"
            onLoad={() => setLoaded(true)}
          />
        </picture>
      </div>

      {/*
        아래 세 겹은 포스터 판 "바깥"에 둔다.
        이것들은 포스터의 성질이 아니라 공간의 성질(방의 빛, 공기의 입자감, 그늘)이고,
        판 안에 두면 판이 움직일 때마다 매 프레임 다시 합성해야 해서 스크롤이 무거워진다.
      */}
      {/* 오른쪽 문에서 새어드는 빛 — 아주 느리게 흔들린다 */}
      <div className="entrance-light" aria-hidden="true" />
      {/* 인쇄 그레인 — 포스터와 벽을 하나의 인쇄면으로 묶는다 */}
      <div className="entrance-grain" aria-hidden="true" />
      {/* 빛에서 멀어지며 지는 그늘 */}
      <div className="entrance-shade" aria-hidden="true" />

      {/* 공기 중의 먼지 */}
      <div className="entrance-dust" aria-hidden="true">
        {DUST.map((d, i) => (
          <span
            key={i}
            style={{
              left: `${d.x}%`,
              top: `${d.y}%`,
              width: `${d.s}px`,
              height: `${d.s}px`,
              animationDuration: `${d.dur}s`,
              animationDelay: `${d.delay}s`,
              "--dx": `${d.dx}px`,
              "--dy": `${d.dy}px`,
            }}
          />
        ))}
      </div>

      {/* 포스터가 물러날수록 짙어지는 전시장 안쪽의 어둠 */}
      <div className="entrance-void" aria-hidden="true" />

    </div>
  );

  return (
    <Room
      index={index}
      total={total}
      label="ENTRANCE"
      id="entrance"
      className="room--entrance"
      backdrop={stage}
    >
      {/* 포스터의 글자는 이미지에 인쇄되어 있으므로, 의미 전달용으로만 남긴다 */}
      <h1 className="sr-only">
        {entrancePoster.artist} — {entrancePoster.kicker}. {entrancePoster.works}.
      </h1>
    </Room>
  );
}
