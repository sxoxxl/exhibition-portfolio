import Room from "./Room.jsx";
import { stack } from "../data/content.js";

export default function Toolbox({ index, total }) {
  return (
    <Room index={index} total={total} label="VITRINE — TOOLS" id="toolbox">
      <span className="eyebrow">Vitrine</span>
      <h2 className="serif-hero timeline-heading">도구 진열장</h2>
      <p className="toolbox-intro">
        작업에 사용하는 언어와 도구들입니다. 코드와 하드웨어, 디자인 툴을 넘나들며
        하나의 경험을 완성합니다.
      </p>

      <div className="toolbox-grid">
        {stack.map((group) => (
          <div className="toolbox-card" key={group.category}>
            <span className="mono-small toolbox-card-label">{group.category}</span>
            <ul className="toolbox-items">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Room>
  );
}
