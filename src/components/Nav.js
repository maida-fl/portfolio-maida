import styled from "styled-components";
import { Link } from "react-scroll";
// import logo from "../img/logo3.png";

const Nav = () => {
  return (
    <StyledNav>
      {/* <a href="#">Logo</a> */}
      <Link to="home" smooth={true} duration={500} className="maida-logo">
        {/* <img src={logo} alt="logo" /> */}
        MG
      </Link>
      <ul>
        <li>
          {/* <a href="#">about me</a> */}
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            about me
          </Link>
        </li>
        <li>
          {/* <a href="#">work</a> */}
          <Link to="work" smooth={true} duration={500} className="nav-link">
            work
          </Link>
        </li>
        <li>
          {/* <a href="#">contact</a> */}
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            contact
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  a {
    text-decoration: none;
    color: #12141d;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  position: sticky;
  top: 0;
  z-index: 3;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.85);
  img {
    width: 150px;
  }
  /* .button-style {
    padding: 1rem 3rem;
    border: 3px solid #5da399;
    border-radius: 1rem;
    background: transparent;
  } */
  li,
  .maida-logo {
    cursor: pointer;
  }
  .maida-logo img {
    width: 50px;
  }
  .nav-link {
    text-decoration: none;
    /* font-weight: 700; */
    position: relative;
  }
  .nav-link::before {
    content: "";
    background-color: rgba(93, 163, 153, 0.5);
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 8px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  .nav-link:hover::before {
    bottom: 0;
    height: 100%;
  }
`;
export default Nav;
