//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

const ContactSection = () => {
  const [element, controls] = useScroll();
  return (
    <Contact
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
      id="contact"
    >
      <h2>Let's talk</h2>
      <a
        href="mailto:maida.guzman@outlook.com"
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="contact">
          <div className="icon">
            <svg width="16" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.254 10.188H15.12V.438H.254v9.75zm2.403-8.635h10.075L7.72 4.923l-5.062-3.37zm-1.287.484l6.352 4.228 6.283-4.222v7.03H1.37V2.037z"
                fill="#12141d;"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="mail" data-status="Click to Copy!">
            maida.guzman@outlook.com
          </span>
        </div>
      </a>
    </Contact>
  );
};

const Contact = styled(motion.div)`
  h2 {
    padding: 5rem 0rem;
  }
  padding: 5rem 10rem;
  .contact {
    transform-origin: top left;
    animation: anim-text 1150ms cubic-bezier(0, 0.45, 0.15, 1);
  }
  @keyframes anim-text {
    0% {
      transform: skew(0, 10deg) rotate(10deg) translate(200px, 1400px);
      opacity: 0;
    }
    60% {
      transform: skew(0, 10deg) rotate(10deg) translate(200px, 1400px);
      opacity: 0;
    }
    100% {
      transform: skew(0, 0) rotate(0) translate(0, 0);
      opacity: 1;
    }
  }
  .contact {
    border: 1px solid #5da399;
    display: flex;
    position: relative;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    height: 80px;
  }
  .contact:before {
    content: "";
    background-color: #5da399;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skew(0, 10deg) rotate(10deg) translateY(250px);
    transition: transform 400ms;
    z-index: -10;
  }
  .contact:hover:before {
    transform: skew(0, 0) rotate(0) translateY(0);
  }
  *::selection {
    background-color: #5da399;
  }

  .contact .icon {
    height: 100%;
    padding: 0 40px;
    margin-right: 40px;
    display: flex;
    box-sizing: border-box;
    /* border-right: 1px solid rgba(243, 242, 244, 0.3); */
    border-right: 1px solid #5da399;
    justify-content: center;
    align-items: center;
  }
  .contact .mail {
    color: #12141d;
    opacity: 0.8;
  }
  .contact:hover .mail {
    /* color: rgba(255, 255, 255, 0.4); */
    color: #12141d;
    /* transform: scale(0.95); */
  }

  .contact:hover .mail:before {
    opacity: 1;
  }
`;

export default ContactSection;
