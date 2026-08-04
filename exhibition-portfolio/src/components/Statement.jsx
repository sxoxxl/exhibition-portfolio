import Room from "./Room.jsx";
import { foreword, profile } from "../data/content.js";

/**
 * SCENE 01 — 전시 서문.
 *
 * 입구(포스터)가 작가의 이름을 보여주는 자리라면, 이 방은 전시가 시작되는 자리입니다.
 * 그래서 이 화면에서 가장 크게 걸리는 것은 작가명이 아니라 챕터 제목 AFTERIMAGES입니다.
 */
export default function Statement({ index, total }) {
  return (
    <Room index={index} total={total} label="FOREWORD" id="foreword">
      <div className="statement-grid">
        <div className="statement-portrait" data-cursor="ARTIST">
          <div className="statement-portrait-plate" aria-hidden="true">
            <span className="statement-portrait-mark">{profile.nameKo}</span>
          </div>
          <span className="mono-small statement-portrait-label">
            {profile.portraitLabel}
          </span>
        </div>

        <div className="statement-copy">
          <span className="eyebrow">
            {foreword.scene} <span className="statement-scene-sep">/</span>{" "}
            {foreword.label}
          </span>

          <h2 className="statement-title serif-hero">
            <span className="statement-title-en">{foreword.title}</span>
            <span className="statement-title-ko">{foreword.titleKo}</span>
          </h2>

          <p className="statement-lead">{foreword.lead}</p>
          <p className="statement-lead statement-lead--en">{foreword.leadEn}</p>

          <div className="statement-body">
            {foreword.body.map((p, i) => (
              <p className="statement-paragraph" key={i}>
                {p}
              </p>
            ))}
          </div>

          {/* 서문의 서명 — 이름은 content.js의 profile 한 곳을 따른다 */}
          <div className="statement-role">
            <hr className="thin" />
            <div className="statement-role-row">
              <span className="statement-byline serif-hero">
                {profile.name}
                <span className="statement-byline-ko">{profile.nameKo}</span>
              </span>
              <span className="mono-small statement-byline-role">
                {profile.role} <span className="ink-dim">/</span> {profile.roleSub}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Room>
  );
}
