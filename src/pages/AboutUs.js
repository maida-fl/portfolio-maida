//Page Components
import AboutSection from "../components/AboutSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ProjectsSection from "../components/ProjectsSection";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ProjectsSection />
    </motion.div>
  );
};

export default AboutUs;
