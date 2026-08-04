import Room from "./Room.jsx";
import { timeline } from "../data/content.js";

const TYPE_LABEL = {
  work: "WORK",
  exhibition: "EXHIBITION",
  teaching: "TEACHING",
  program: "PROGRAM",
  edu: "EDUCATION",
};

export default function Timeline({ index, total }) {
  return (
    <Room index={index} total={total} label="PASSAGE — CAREER" id="timeline">
      <span className="eyebrow">Passage</span>
      <h2 className="serif-hero timeline-heading">경력의 통로</h2>

      <ol className="timeline-list">
        {timeline.map((item, i) => (
          <li className="timeline-item" key={i}>
            <span className="timeline-year mono-small">{item.year}</span>
            <div className="timeline-body">
              <span className="timeline-type mono-small">
                {TYPE_LABEL[item.type] || "WORK"}
              </span>
              <h3 className="timeline-title">{item.titleKo}</h3>
              <span className="timeline-org mono-small">{item.org}</span>
              {/* 설명이 없는 항목(학력·수료 등)은 빈 줄을 남기지 않는다 */}
              {item.descKo ? <p className="timeline-desc">{item.descKo}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </Room>
  );
}
