//Page Components
import AboutSection from "../components/AboutSection";
import Nav from "../components/Nav";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

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
        <ContactSection />
      </motion.div>
    </>
  );
};

export default AboutUs;
