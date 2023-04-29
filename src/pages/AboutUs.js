//Page Components
import AboutSection from "../components/AboutSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
    </motion.div>
  );
};

export default AboutUs;
