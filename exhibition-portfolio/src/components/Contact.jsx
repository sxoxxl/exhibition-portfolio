import Room from "./Room.jsx";
import { contact } from "../data/content.js";

export default function Contact({ index, total }) {
  return (
    <Room index={index} total={total} label="EXIT — CONTACT" id="contact">
      <span className="eyebrow">Exit</span>
      <h2 className="serif-hero contact-heading">{contact.closingKo}</h2>
      <p className="contact-sub mono-small">{contact.closingEn}</p>

      <a className="contact-email serif-hero" href={`mailto:${contact.email}`} data-cursor="WRITE">
        {contact.email}
      </a>

      <div className="contact-footer">
        <div className="contact-links">
          {contact.links.map((l) => (
            <a key={l.label} href={l.href} className="contact-link">
              <span className="mono-small">{l.label}</span>
              <span>{l.value}</span>
            </a>
          ))}
        </div>
        <span className="mono-small contact-location">{contact.location}</span>
      </div>
    </Room>
  );
}
