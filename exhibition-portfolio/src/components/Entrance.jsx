import Room from "./Room.jsx";
import { profile } from "../data/content.js";

export default function Entrance({ index, total }) {
  return (
    <Room index={index} total={total} label="ENTRANCE" id="entrance" className="room--entrance">
      <div className="entrance-plaque mono-small">
        {profile.venueNote} · {profile.period} · {profile.location}
      </div>

      <h1 className="entrance-title serif-hero">
        <span className="entrance-title-en">{profile.exhibitionTitle}</span>
        <span className="entrance-title-ko">{profile.exhibitionTitleKo}</span>
      </h1>

      <div className="entrance-meta">
        <p className="entrance-tagline">{profile.tagline}</p>
        <p className="entrance-tagline entrance-tagline--en">{profile.taglineEn}</p>
      </div>

      <div className="entrance-artist">
        <span className="mono-small">WORK BY</span>
        <span className="entrance-artist-name serif-hero">
          {profile.name} <span className="entrance-artist-ko">{profile.nameKo}</span>
        </span>
        <span className="mono-small entrance-artist-role">{profile.roleKo}</span>
      </div>

      <div className="entrance-scrollcue" aria-hidden="true">
        <span className="mono-small">SCROLL TO ENTER</span>
        <span className="entrance-scrollcue-line" />
      </div>
    </Room>
  );
}
