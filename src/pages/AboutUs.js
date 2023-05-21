//Page Components
import AboutSection from "../components/AboutSection";
import Nav from "../components/Nav";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ProjectsSection from "../components/ProjectsSection";

const AboutUs = () => {
  return (
    <>
      <Nav />
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AboutSection />
        <ProjectsSection />
      </motion.div>
    </>
  );
};

export default AboutUs;
