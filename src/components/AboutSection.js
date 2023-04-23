import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Maida Guzman</h2>
          </Hide>
          <Hide>
            <p>
              web <span>developer</span>
            </p>
          </Hide>
          <button>Contact</button>
        </div>
      </Description>
      {/* <Image>
        <img src={home1} alt="cvimage" />
      </Image> */}
    </About>
  );
};

export default AboutSection;
