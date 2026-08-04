/**
 * AmbientOverlay — 필름 그레인 + 비네트.
 * 전시 공간의 은은한 조명 질감을 위한 순수 CSS/SVG 오버레이 (외부 이미지 없음).
 */
export default function AmbientOverlay() {
  return (
    <>
      <svg className="grain-overlay" aria-hidden="true">
        <filter id="grainFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainFilter)" />
      </svg>
      <div className="vignette-overlay" aria-hidden="true" />
    </>
  );
}
