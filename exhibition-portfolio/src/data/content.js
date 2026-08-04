/**
 * ─────────────────────────────────────────────────────────────
 *  전시 콘텐츠 데이터 (PLACEHOLDER / 가상 예시)
 * ─────────────────────────────────────────────────────────────
 *  이 파일에 있는 이름, 경력, 프로젝트, 연락처는 전부 예시입니다.
 *  실제 내용으로 교체할 때는 이 파일만 수정하면 됩니다.
 *  (컴포넌트 코드를 건드릴 필요 없음)
 * ─────────────────────────────────────────────────────────────
 */

/**
 * 작가.
 * 이름 표기는 이 한 곳에서만 관리합니다 — 전시 전체가 여기를 따릅니다.
 * (입구 포스터의 이름은 이미지 안에 인쇄되어 있어 아래 entrancePoster.artist와
 *  짝을 이룹니다. 둘은 항상 같은 표기를 유지하세요.)
 */
export const profile = {
  name: "PARK SOL",
  nameKo: "박솔",
  role: "Media Artist",
  roleSub: "Exhibition & Media Director",
  roleKo: "미디어아트 작가 · 전시/미디어 연출",
  portraitLabel: "PORTRAIT — 2026",
};

/**
 * SCENE 01 — 전시 서문.
 *
 * AFTERIMAGES(잔상)는 포트폴리오의 제목이 아니라 이 전시의 첫 챕터 제목입니다.
 * 입구(포스터)는 작가의 이름을 보여주는 자리이고, 이 방에서 전시가 시작됩니다.
 */
export const foreword = {
  scene: "SCENE 01",
  label: "FOREWORD",
  title: "AFTERIMAGES",
  titleKo: "잔상",
  lead: "기술과 예술을 유기적으로 연결하는 미디어아트를 통해, 관객과 공간이 새로운 방식으로 소통하는 전시를 만들어가고자 합니다.",
  leadEn: "Making exhibitions where audience and space speak to each other in a new way.",
  body: [
    "국립아시아문화전당, 광주미디어아트플랫폼, 한국문화예술위원회 등 문화예술기관을 중심으로 전시·공연·공공예술 프로젝트의 제작과 연출에 참여해 왔습니다.",
    "AI와 실감미디어를 활용한 작품 제작부터 전시 운영, 기술 교육까지 다양한 현장을 경험하며 창작자이자 제작자로서의 역량을 확장하고 있습니다.",
  ],
};

/**
 * 입구에 걸린 전시 포스터.
 * 포스터 이미지 안에 이미 인쇄되어 있는 문구들을 그대로 옮겨 적은 것입니다.
 * (화면에 다시 그리지 않고, 스크린리더 · 검색엔진용 대체 텍스트로만 사용됩니다)
 *
 * 포스터 이미지 자체는 두 장입니다 — src/assets/
 *   entrance-poster.webp           가로 화면용
 *   entrance-poster-portrait.webp  세로 화면용
 * 교체할 때는 같은 파일명으로 덮어쓰면 됩니다.
 */
export const entrancePoster = {
  artist: "PARK SOL",
  artistKo: "박솔",
  kicker: "MEDIA ART / REALTIME VISUAL",
  works: "SELECTED WORKS 2023–2026",
  enterCue: "SCROLL TO ENTER",
  enterCueKo: "스크롤하여 입장",
  alt:
    "전시 포스터: 빛이 들어오는 미술관 복도 사진 위에 크림색 대문자로 PARK SOL이 " +
    "화면을 가득 채우고 있다. 상단에 MEDIA ART / REALTIME VISUAL, " +
    "하단에 SELECTED WORKS 2023–2026.",
};

/**
 * 경력 · 학력.
 *
 * type은 각 항목에 붙는 라벨을 정합니다 —
 *   work(활동) / exhibition(전시·상영) / teaching(강의) / program(수료) / edu(학력)
 * 최신순으로 정렬해 두면 화면에도 그 순서로 걸립니다.
 */
export const timeline = [
  {
    year: "2026",
    titleKo: "문화체육관광부 청년인턴 · 미디어 연출",
    org: "국립아시아문화전당(ACC) 공연사업과 창제작센터",
    descKo: "공연사업과 창제작센터에서 미디어 연출 분야 인턴으로 참여.",
    type: "work",
  },
  {
    year: "2026",
    titleKo: "AI 활용 전남·광주작가 미디어아트 제작 시범 운영",
    org: "국립아시아문화전당(ACC) · 연출 · 제작",
    descKo: "AI를 활용한 미디어아트 제작에 연출·제작으로 참여. 2026.06—09 ACC 미디어월 상영.",
    type: "exhibition",
  },
  {
    year: "2025",
    titleKo: "멀티미디어학 전공",
    org: "국가평생교육진흥원",
    descKo: "",
    type: "edu",
  },
  {
    year: "2025",
    titleKo: "디지털아트 컬처랩 쇼케이스 〈빛의 궤도〉 참여",
    org: "광주미디어아트플랫폼(G.MAP) · 미디어아트 작가",
    descKo: "미디어아트 작가로 쇼케이스에 참여.",
    type: "exhibition",
  },
  {
    year: "2025",
    titleKo: "인큐베이팅랩 터치디자이너 입문 교육 강사",
    org: "광주미디어아트플랫폼(G.MAP)",
    descKo: "터치디자이너 입문 과정을 맡아 진행.",
    type: "teaching",
  },
  {
    year: "2025",
    titleKo: "ACC 전문인 콘텐츠 발굴 3단계 수료 · 일경험 인턴십 3개월 수료",
    org: "국립아시아문화전당(ACC)",
    descKo: "",
    type: "program",
  },
  {
    year: "2024",
    titleKo: "아르코 문화예술전문가 코스 수료",
    org: "한국문화예술위원회(ARKO) · 전시기획 12기 · 무대기술 15기",
    descKo: "전시기획 분야와 무대기술 분야 과정을 각각 수료.",
    type: "program",
  },
  {
    year: "2023",
    titleKo: "창작뮤지컬 인형극 무대영상 디자인 및 연출",
    org: "예비예술인 지원사업",
    descKo: "창작뮤지컬 인형극의 무대영상 디자인과 연출에 참여.",
    type: "work",
  },
  {
    year: "2023",
    titleKo: "공연기획연출 전공",
    org: "백석예술대학교",
    descKo: "",
    type: "edu",
  },
];

/** 도구 진열장 머리말. */
export const stackIntro =
  "전시와 공연 현장에서 실제로 다루는 도구와 영역입니다. 제작부터 연출, 운영과 교육까지 이어집니다.";

export const stack = [
  {
    category: "Media Art / Realtime",
    items: ["TouchDesigner", "실감미디어 · 미디어월", "AI 활용 영상 제작"],
  },
  {
    category: "Stage & Exhibition",
    items: ["무대영상 디자인", "전시 연출 · 운영", "공연 미디어 연출"],
  },
  {
    category: "Teaching",
    items: ["TouchDesigner 입문 교육"],
  },
];

/**
 * 작품(전시실).
 *
 * 항목을 더하거나 빼면 전시실 개수와 우측 진행 표시가 자동으로 따라갑니다.
 * accent는 그 작품 방의 포인트 컬러입니다.
 *
 * ※ descKo(설명)는 제출하신 경력 문서를 바탕으로 쓴 초안입니다.
 *   실제 작업 내용에 맞게 다듬어 주세요.
 */
export const projects = [
  {
    num: "01",
    title: "AI MEDIA ART",
    titleKo: "AI 활용 전남·광주작가 미디어아트",
    year: "2026",
    medium: "미디어월 상영 · 실감미디어",
    role: "연출 · 제작",
    tools: ["AI 영상 제작", "미디어월", "실감미디어"],
    descKo:
      "국립아시아문화전당의 시범 운영 사업으로, AI를 활용해 전남·광주 지역 작가의 미디어아트를 제작했습니다. 2026년 6월부터 9월까지 ACC 미디어월에서 상영되었습니다.",
    accent: "#2E8BE0",
  },
  {
    num: "02",
    title: "ORBIT OF LIGHT",
    titleKo: "빛의 궤도",
    year: "2025",
    medium: "디지털아트 쇼케이스",
    role: "미디어아트 작가",
    tools: ["TouchDesigner", "실감미디어"],
    descKo:
      "광주미디어아트플랫폼(G.MAP) 디지털아트 컬처랩 쇼케이스에 미디어아트 작가로 참여한 작업입니다.",
    accent: "#8A6CF2",
  },
  {
    num: "03",
    title: "PUPPET STAGE",
    titleKo: "창작뮤지컬 인형극 무대영상",
    year: "2023",
    medium: "공연 무대영상",
    role: "무대영상 디자인 · 연출",
    tools: ["무대영상", "프로젝션"],
    descKo:
      "예비예술인 지원사업으로 제작된 창작뮤지컬 인형극의 무대영상을 디자인하고 연출했습니다.",
    accent: "#E0A22E",
  },
];

export const contact = {
  email: "studio.afterimage@example.com",
  location: "Seoul, KR",
  links: [
    { label: "Instagram", value: "@sol.afterimage", href: "#" },
    { label: "Vimeo", value: "vimeo.com/solafterimage", href: "#" },
    { label: "GitHub", value: "github.com/sol-dev", href: "#" },
  ],
  closingKo: "다음 전시실은, 당신과의 대화입니다.",
  closingEn: "The next room is a conversation with you.",
};
