import GalleryCursor from "./components/GalleryCursor.jsx";
import AmbientOverlay from "./components/AmbientOverlay.jsx";
import ProgressRail from "./components/ProgressRail.jsx";
import Entrance from "./components/Entrance.jsx";
import Statement from "./components/Statement.jsx";
import Timeline from "./components/Timeline.jsx";
import Toolbox from "./components/Toolbox.jsx";
import ProjectRoom from "./components/ProjectRoom.jsx";
import Contact from "./components/Contact.jsx";
import { projects } from "./data/content.js";
import { useScrollTelemetry } from "./hooks/useScrollTelemetry.js";

const FIXED_ROOMS = 4; // Entrance, Statement, Timeline, Toolbox
const TOTAL_ROOMS = FIXED_ROOMS + projects.length + 1; // + Contact

export default function App() {
  const { progress, activeIndex } = useScrollTelemetry(TOTAL_ROOMS);

  return (
    <div className="exhibition">
      <a href="#entrance" className="skip-link">
        본문(전시 입구)으로 바로가기
      </a>

      <GalleryCursor />
      <AmbientOverlay />
      <ProgressRail progress={progress} activeIndex={activeIndex} total={TOTAL_ROOMS} />

      <main className="exhibition-main">
        <Entrance index={0} total={TOTAL_ROOMS} />
        <Statement index={1} total={TOTAL_ROOMS} />
        <Timeline index={2} total={TOTAL_ROOMS} />
        <Toolbox index={3} total={TOTAL_ROOMS} />

        {projects.map((project, i) => (
          <ProjectRoom
            key={project.num}
            index={FIXED_ROOMS + i}
            total={TOTAL_ROOMS}
            project={project}
          />
        ))}

        <Contact index={FIXED_ROOMS + projects.length} total={TOTAL_ROOMS} />
      </main>
    </div>
  );
}
