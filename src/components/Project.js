//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <StyledProject>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img src={props.image} alt="styled" />
      <div className="blur"></div>
    </StyledProject>
  );
};

const StyledProject = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  h3 {
    padding: 1.5rem 0rem;
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: top;
  }
  .blur {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
    transition: all 0.8s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }
  }
`;

export default Project;
