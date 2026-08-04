# AFTERIMAGES — 전시형 포트폴리오 (React + Vite)

스크롤이 "페이지 이동"이 아니라 "전시 공간 이동"이 되도록 설계된 디지털 전시 포트폴리오입니다.
현재 들어있는 이름/경력/프로젝트/연락처는 전부 **가상의 예시 콘텐츠**입니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 안내되는 로컬 주소(기본 http://localhost:5173)로 접속하면 됩니다.

배포용 빌드:

```bash
npm run build
```

`dist/` 폴더가 생성되며, 이 폴더를 그대로 정적 호스팅(Vercel, Netlify, GitHub Pages 등)에 올리면 됩니다.

## 실제 콘텐츠로 교체하기

**`src/data/content.js` 파일 하나만 수정하면 됩니다.** 컴포넌트 코드는 건드릴 필요가 없습니다.

- `profile` — 이름, 역할, 전시 타이틀, 작가 노트(Statement)
- `timeline` — 경력/학력/레지던시 연대기
- `stack` — 기술 스택 (카테고리별 그룹)
- `projects` — 프로젝트(전시 작품) 목록. `accent`는 해당 작품 방의 포인트 컬러(hex)입니다.
- `contact` — 이메일, SNS 링크, 위치

프로젝트를 추가/삭제하려면 `projects` 배열의 항목을 추가/삭제하면 자동으로 방(room) 개수와
우측 진행률 인디케이터(진행 레일)의 총 개수도 함께 갱신됩니다.

## 구조

```
src/
  data/content.js        ← 콘텐츠 (텍스트) — 여기만 수정하면 됨
  hooks/
    useScrollTelemetry.js  전체 스크롤 진행률 + 현재 전시실 추적
    useIsTouch.js           터치기기 감지 (커스텀 커서 on/off)
  components/
    Room.jsx              전시실 공용 래퍼 (등장 애니메이션 + 번호 라벨)
    GalleryCursor.jsx      손전등처럼 따라다니는 커스텀 커서
    ProgressRail.jsx       우측 관람 진행 인디케이터
    AmbientOverlay.jsx     필름 그레인 + 비네트 (조명 질감)
    Entrance.jsx           00 — 입구 (타이틀)
    Statement.jsx          01 — 작가 노트
    Timeline.jsx           02 — 경력 연대기
    Toolbox.jsx            03 — 기술 스택
    ProjectRoom.jsx        04~ — 프로젝트 (포스터형 전시실), 1개 컴포넌트를 재사용
    Contact.jsx            마지막 — 연락처
  App.jsx                  전체 조립 + 전시실 순번 계산
  index.css                디자인 토큰 + 커서/오버레이/레일 스타일
  sections.css              섹션별 세부 스타일
```

## 디자인 의도

- 각 섹션은 `min-height: 100vh`의 "전시실"이며, `scroll-snap`으로 방과 방 사이를 이동하는
  느낌을 줍니다 (강제 스냅이 아닌 `proximity`로, 자유롭게 더 읽을 수도 있습니다).
- 뷰포트에 들어올 때마다 콘텐츠가 서서히 떠오르며 등장합니다 (`Room.jsx`의 IntersectionObserver).
- 우측의 얇은 세로 바는 "관람 진행률"과 현재 전시실 번호를 보여주는 도슨트 UI입니다.
- 마우스는 갤러리의 손전등처럼 동작하며, `data-cursor="라벨"` 속성이 있는 요소 위에서
  라벨과 함께 확대됩니다.
- 이미지 자산 없이도 동작하도록 인물 사진/작품 이미지 자리는 그라디언트 플레이트로
  대체되어 있습니다. 실제 이미지가 준비되면 `Statement.jsx`의 `.statement-portrait-plate`,
  `ProjectRoom.jsx`의 `.project-backdrop` 부분에 `<img>` 또는 배경 이미지를 넣어 교체하세요.

## 다음 단계 제안

- 실제 프로필 사진 / 작품 이미지·영상 교체
- 프로젝트 상세 페이지(모달 또는 별도 라우트) 추가
- 접근성 검수 (스크린리더용 대체 텍스트, 키보드 포커스 스타일)
