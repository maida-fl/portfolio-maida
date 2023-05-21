//Components
import Project from "./Project";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";
//Images
import quotes from "../img/quotes-ipad-mockup.png";
import capture from "../img/capture.png";
import mood from "../img/mood.png";
import ignite from "../img/ignite.png";
import numa from "../img/numa.png";

const ProjectsSection = () => {
  const [element, controls] = useScroll();
  return (
    <ProjectList
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
      id="work"
    >
      <h2>Projects</h2>
      <Projects>
        <Project name="mood." description="Music Web App" image={mood} />
        <Project
          name="NUMA"
          description="e-commerce landing page"
          image={numa}
        />
        <Project
          name="QUOTES"
          description="Random quote generator working with public API and integrated with Twitter"
          image={quotes}
        />
        <Project
          name="Ignite"
          description="Gaming App working with public API"
          image={ignite}
        />
        <Project
          name="Capture"
          description="Web portfolio for Photography and Video"
          image={capture}
        />
      </Projects>
    </ProjectList>
  );
};

const ProjectList = styled(motion.div)`
  h2 {
    padding: 5rem 0rem;
  }
  padding: 5rem 10rem;
`;
const Projects = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default ProjectsSection;
