import React from "react";
// import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";
// import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h1 variants={titleAnim}>Maida Guzman</motion.h1>
          </Hide>
          <Hide>
            <motion.h1 className="subtitle" variants={titleAnim}>
              web <span>developer</span>
            </motion.h1>
          </Hide>
        </motion.div>
        <motion.button variants={fade}>Contact</motion.button>
      </Description>
      {/* <Image>
        <img src={home1} alt="cvimage" />
      </Image> */}
      {/* <Wave/> */}
    </About>
  );
};

export default AboutSection;
