/**
 * ─────────────────────────────────────────────────────────────
 *  전시 콘텐츠 데이터 (PLACEHOLDER / 가상 예시)
 * ─────────────────────────────────────────────────────────────
 *  이 파일에 있는 이름, 경력, 프로젝트, 연락처는 전부 예시입니다.
 *  실제 내용으로 교체할 때는 이 파일만 수정하면 됩니다.
 *  (컴포넌트 코드를 건드릴 필요 없음)
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "SOL",
  nameKo: "솔",
  role: "Interactive Media Artist",
  roleSub: "Creative Developer",
  roleKo: "인터랙티브 미디어 아티스트 · 크리에이티브 디벨로퍼",
  exhibitionTitle: "AFTERIMAGES",
  exhibitionTitleKo: "잔상",
  period: "2020 — 2026",
  venueNote: "SOLO EXHIBITION / DIGITAL SPACE",
  location: "Seoul, KR",
  tagline: "빛과 움직임, 그리고 그 사이에 남는 감각에 대한 기록.",
  taglineEn: "A record of light, motion, and what remains between them.",
  statement: [
    "저는 코드를 재료로 빛과 움직임, 소리를 다루는 인터랙티브 미디어 아티스트입니다. 관객의 몸짓과 목소리, 시선이 공간의 일부가 되는 순간을 만드는 데 관심이 있습니다.",
    "센서와 실시간 데이터, 제너러티브 비주얼을 결합해 '보는 전시'가 아니라 '반응하는 공간'을 설계합니다. 완성된 이미지보다, 관객이 개입하는 순간 발생하는 잔상과 여운에 집중합니다.",
    "최근에는 물리적 설치와 웹 기반 인터랙션의 경계를 허무는 작업을 이어가고 있습니다.",
  ],
  portraitLabel: "SELF PORTRAIT — STUDIO, 2026",
};

export const timeline = [
  {
    year: "2026",
    titleKo: "스튜디오 잔상(Studio Afterimage) 설립",
    org: "대표 · 크리에이티브 디렉터",
    descKo: "인터랙티브 설치와 웹 기반 미디어아트를 중심으로 하는 개인 스튜디오를 열었습니다.",
    type: "work",
  },
  {
    year: "2024",
    titleKo: "국립 미디어랩 레지던시 참여",
    org: "입주 작가",
    descKo: "실시간 센서 데이터를 활용한 공간 설치 연구 및 전시 진행.",
    type: "award",
  },
  {
    year: "2023",
    titleKo: "크리에이티브 스튜디오 근무",
    org: "인터랙션 디자이너",
    descKo: "브랜드 미디어아트 설치 및 웹 기반 인터랙티브 캠페인 다수 참여.",
    type: "work",
  },
  {
    year: "2021",
    titleKo: "미디어아트과 졸업",
    org: "학사",
    descKo: "졸업 작품으로 신체 움직임 기반 제너러티브 비주얼 설치 발표.",
    type: "edu",
  },
  {
    year: "2020",
    titleKo: "프리랜스 크리에이티브 코더로 활동 시작",
    org: "Freelance",
    descKo: "웹 기반 인터랙티브 프로젝트와 소규모 설치 작업을 병행.",
    type: "work",
  },
];

export const stack = [
  {
    category: "Creative Coding",
    items: ["Three.js / WebGL", "TouchDesigner", "p5.js", "GLSL Shader"],
  },
  {
    category: "Design & Motion",
    items: ["Figma", "After Effects", "Cinema 4D", "Blender"],
  },
  {
    category: "Interaction & Hardware",
    items: ["Arduino", "Depth / Motion Sensor", "Max/MSP", "OSC / WebSocket"],
  },
  {
    category: "Development",
    items: ["React", "Node.js", "WebGL / GLSL", "Python"],
  },
];

export const projects = [
  {
    num: "01",
    title: "ECHO CHAMBER",
    titleKo: "에코 챔버",
    year: "2025",
    medium: "인터랙티브 사운드-라이트 설치",
    role: "크리에이티브 디렉터 · 개발",
    tools: ["TouchDesigner", "Max/MSP", "Sensor Array"],
    descKo:
      "관객의 목소리와 발소리가 공간을 채우는 빛의 파동으로 변환되는 사운드-라이트 설치. 소리가 사라진 자리에 남는 빛의 잔상을 다룹니다.",
    accent: "#2FA890",
  },
  {
    num: "02",
    title: "LIMINAL LIGHT",
    titleKo: "리미널 라이트",
    year: "2024",
    medium: "제너러티브 라이트 설치 · WebGL",
    role: "크리에이티브 코더",
    tools: ["Three.js", "GLSL", "WebGL"],
    descKo:
      "실시간으로 변형되는 빛의 문턱을 통과하는 경험. 관객의 이동 속도에 따라 공간의 명도와 색온도가 반응합니다.",
    accent: "#8A6CF2",
  },
  {
    num: "03",
    title: "WAVEFRONT",
    titleKo: "웨이브프론트",
    year: "2023",
    medium: "데이터 기반 키네틱 비주얼",
    role: "테크니컬 아티스트",
    tools: ["p5.js", "WebSocket", "Python"],
    descKo:
      "실시간 조류·기상 데이터를 입력받아 움직이는 키네틱 비주얼로 변환하는 프로젝트. 자연의 리듬을 화면 위의 파동으로 옮깁니다.",
    accent: "#2E8BE0",
  },
  {
    num: "04",
    title: "AFTERGLOW",
    titleKo: "애프터글로우",
    year: "2022",
    medium: "AR 인터랙티브 경험",
    role: "인터랙션 디자이너 · 개발",
    tools: ["WebXR", "React", "Three.js"],
    descKo:
      "물리적 공간에 빛의 궤적을 남기는 AR 작업. 관객이 지나간 자리마다 잔광이 머물다 서서히 사라집니다.",
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
