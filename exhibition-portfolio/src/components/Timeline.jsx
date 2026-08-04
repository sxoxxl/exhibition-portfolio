import Room from "./Room.jsx";
import { timeline } from "../data/content.js";

const TYPE_LABEL = {
  work: "WORK",
  edu: "EDU",
  award: "RESIDENCY",
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
              <p className="timeline-desc">{item.descKo}</p>
            </div>
          </li>
        ))}
      </ol>
    </Room>
  );
}
