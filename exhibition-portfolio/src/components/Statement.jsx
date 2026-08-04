import Room from "./Room.jsx";
import { profile } from "../data/content.js";

export default function Statement({ index, total }) {
  return (
    <Room index={index} total={total} label="ARTIST STATEMENT" id="statement">
      <div className="statement-grid">
        <div className="statement-portrait" data-cursor="SELF">
          <div className="statement-portrait-plate" aria-hidden="true">
            <span className="statement-portrait-mark">{profile.nameKo}</span>
          </div>
          <span className="mono-small statement-portrait-label">
            {profile.portraitLabel}
          </span>
        </div>

        <div className="statement-copy">
          <span className="eyebrow">Artist Statement</span>
          <h2 className="serif-hero statement-heading">작가 노트</h2>
          {profile.statement.map((p, i) => (
            <p className="statement-paragraph" key={i}>
              {p}
            </p>
          ))}
          <div className="statement-role">
            <hr className="thin" />
            <div className="statement-role-row">
              <span className="mono-small">ROLE</span>
              <span>
                {profile.role} <span className="ink-dim">/</span> {profile.roleSub}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Room>
  );
}
