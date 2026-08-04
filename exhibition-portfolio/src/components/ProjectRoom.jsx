import Room from "./Room.jsx";

export default function ProjectRoom({ index, total, project }) {
  const { num, title, titleKo, year, medium, role, tools, descKo, accent } = project;

  const backdrop = (
    <div
      className="project-backdrop"
      style={{
        background: `radial-gradient(circle at 78% 22%, ${accent}33, transparent 55%),
                     radial-gradient(circle at 15% 85%, ${accent}22, transparent 60%)`,
      }}
      aria-hidden="true"
    />
  );

  return (
    <Room
      index={index}
      total={total}
      label={`WORK ${num}`}
      id={`work-${num}`}
      className="room--project"
      backdrop={backdrop}
    >
      <div className="project-grid" data-cursor="VIEW WORK">
        <div className="project-heading">
          <span className="project-num serif-hero" style={{ color: accent }}>
            {num}
          </span>
          <div>
            <h2 className="project-title serif-hero">{title}</h2>
            <span className="project-title-ko">{titleKo}</span>
          </div>
        </div>

        <div className="project-meta">
          <dl>
            <div>
              <dt className="mono-small">YEAR</dt>
              <dd>{year}</dd>
            </div>
            <div>
              <dt className="mono-small">MEDIUM</dt>
              <dd>{medium}</dd>
            </div>
            <div>
              <dt className="mono-small">ROLE</dt>
              <dd>{role}</dd>
            </div>
          </dl>

          <p className="project-desc">{descKo}</p>

          <ul className="project-tools">
            {tools.map((t) => (
              <li key={t} style={{ borderColor: accent }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Room>
  );
}
