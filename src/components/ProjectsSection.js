//Components
import Project from "./Project";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";
//Images
import quotes from "../img/quotes.png";
import capture from "../img/capture.png";
import mood from "../img/mood2.png";
import ignite from "../img/ignite.png";
import numa from "../img/numa.png";
import portfolio from "../img/portfolio.png";

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
        <Project
          name="mood."
          description="Music Web App"
          image={mood}
          url="https://mood-music-app.onrender.com/"
        />
        <Project
          name="NUMA"
          description="e-commerce landing page"
          image={numa}
          url="https://numa.onrender.com/"
        />
        <Project
          name="Portfolio"
          description="Personal portfolio website"
          image={portfolio}
          url="https://maidaguzman.vercelapp.com/"
        />

        {/* <Project
            name="Quotes"
            description="Random quote generator with public API and integrated with Twitter"
            image={quotes}
            url="https://my-random-quote-generator.onrender.com/"
          />
          <Project
            name="Ignite"
            description="Gaming Web App working with public API"
            image={ignite}
            url="https://ignite-games.onrender.com/"
          />
          <Project
            name="Focus"
            description="Web portfolio for Photography and Video"
            image={capture}
            url="https://focus-films.onrender.com/"
          /> */}
      </Projects>
    </ProjectList>
  );
};

const ProjectList = styled(motion.div)`
  h2 {
    padding: 5rem 0rem;
  }
  padding: 5rem 10rem;

  @media (max-width: 850px) {
    h2 {
      padding: 5rem 0rem;
    }
    padding: 5rem 5rem;
  }
  @media (max-width: 600px) {
    h2 {
      padding: 5rem 0rem;
    }
    padding: 5rem 3rem;
  }
`;
const Projects = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

export default ProjectsSection;
