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
      <div className="container-contact-links">
        <a
          href="mailto:maida.guzman@outlook.com"
          className="nav-link contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact">
            <div className="icon">
              <svg width="16" height="11" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.254 10.188H15.12V.438H.254v9.75zm2.403-8.635h10.075L7.72 4.923l-5.062-3.37zm-1.287.484l6.352 4.228 6.283-4.222v7.03H1.37V2.037z"
                  fill="#12141d"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="mail" data-status="Click to Copy!">
              maida.guzman@outlook.com
            </span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/maida-guzman"
          className="nav-link contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
              </svg>
            </div>
            <span className="mail" data-status="Click to Copy!">
              linkedin
            </span>
          </div>
        </a>
      </div>
    </Contact>
  );
};

const Contact = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 10rem;
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
    transform: skew(0, 10deg) rotate(0) translateY(250px);
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
  .contact .icon svg {
    max-width: 16px;
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
  .contact-link .contact {
    margin-bottom: 1rem;
  }
`;

export default ContactSection;
