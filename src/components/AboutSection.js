import React from "react";
//Styled
import styled from "styled-components";
import home1 from "../img/home1.png";

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
      <Image>
        <img src={home1} alt="cvimage" />
      </Image>
    </About>
  );
};

//Styled component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #000;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 50vh;
    object-fit: scale-down;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
