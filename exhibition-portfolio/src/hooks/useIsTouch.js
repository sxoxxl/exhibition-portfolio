import { useEffect, useState } from "react";

/**
 * 터치/코스 포인터 기기 감지.
 * 커스텀 커서(손전등 효과)는 마우스 환경에서만 활성화합니다.
 */
export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return isTouch;
}
