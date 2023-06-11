//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import iconstc from "../img/technologies-icons/styled-icon.svg";
import iconcss from "../img/technologies-icons/css-icon.svg";
import iconfrm from "../img/technologies-icons/framer-icon.svg";
import iconhtm from "../img/technologies-icons/html-icon.svg";
import iconjvs from "../img/technologies-icons/javascript-icon.svg";
import iconrct from "../img/technologies-icons/react-icon.svg";
import iconrdx from "../img/technologies-icons/redux-icon.svg";

const Project = (props) => {
  return (
    <StyledProject>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className="image">
          <img src={props.image} alt="styled" />
          <div className="blur"></div>
          <div className="content">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div className="technologies">
              <img
                src={iconstc}
                alt="styledcomponents"
                title="Styled Components"
              />
              <img src={iconcss} alt="css" title="CSS3" />
              <img src={iconfrm} alt="framermotion" title="Framer Motion" />
              <img src={iconhtm} alt="html" title="HTML5" />
              <img src={iconjvs} alt="javascript" title="Javascript" />
              <img src={iconrct} alt="reactjs" title="ReactJS" />
              <img src={iconrdx} alt="redux" title="Redux" />
            </div>
          </div>
        </div>
      </a>
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
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: center;
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
    transition: all 0.8s ease;
    z-index: 1;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
    h3,
    p {
      color: black;
    }
    .technologies {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 1rem;
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
