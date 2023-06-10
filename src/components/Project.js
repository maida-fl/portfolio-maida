//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <StyledProject>
      <div className="image">
        <img src={props.image} alt="styled" />
        <div className="blur"></div>
        <div className="content">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
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

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.8s ease;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
    h3,
    p {
      color: black;
    }
  }

  .image {
    position: relative;
    &:hover .blur {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }
  }

  .blur {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
    transition: all 0.8s ease;
  }
`;

export default Project;
