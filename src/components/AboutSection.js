import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>Maida Guzman</motion.h2>
          </Hide>
          <Hide>
            <motion.p>
              web <span>developer</span>
            </motion.p>
          </Hide>
        </motion.div>
        <button>Contact</button>
      </Description>
      {/* <Image>
        <img src={home1} alt="cvimage" />
      </Image> */}
    </About>
  );
};

export default AboutSection;
