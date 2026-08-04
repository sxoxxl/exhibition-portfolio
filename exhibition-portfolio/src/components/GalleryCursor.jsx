import { useEffect, useRef } from "react";
import { useIsTouch } from "../hooks/useIsTouch.js";

/**
 * GalleryCursor — 손전등처럼 공간을 따라다니는 커스텀 커서.
 * data-cursor="VIEW" 같은 속성을 가진 요소 위에서 라벨과 크기가 바뀝니다.
 */
export default function GalleryCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const isTouch = useIsTouch();

  useEffect(() => {
    if (isTouch) return;
    document.body.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf;
    let revealed = false;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!revealed) {
        revealed = true;
        dotRef.current?.style.setProperty("opacity", "1");
        glowRef.current?.style.setProperty("opacity", "1");
      }
    };

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(render);
    };

    const onOver = (e) => {
      const target = e.target.closest?.("[data-cursor]");
      if (target && dotRef.current) {
        dotRef.current.classList.add("is-active");
        dotRef.current.dataset.label = target.getAttribute("data-cursor") || "";
      }
    };

    const onOut = (e) => {
      const target = e.target.closest?.("[data-cursor]");
      if (target && dotRef.current) {
        dotRef.current.classList.remove("is-active");
        dotRef.current.removeAttribute("data-label");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <div className="gallery-cursor" ref={dotRef} aria-hidden="true" />
    </>
  );
}
