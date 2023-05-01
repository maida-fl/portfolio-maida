//Components
import Project from "./Project";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <ProjectList>
      <h2>Projects</h2>
      <Projects>
        <Project />
        <Project />
        <Project />
        <Project />
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
