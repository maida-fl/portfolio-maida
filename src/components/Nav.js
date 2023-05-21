import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        {/* <a href="#">Logo</a> */}
        <Link to="home" smooth={true} duration={500}>
          Logo
        </Link>
      </h1>
      <ul>
        <li>
          {/* <a href="#">about me</a> */}
          <Link to="skills" smooth={true} duration={500}>
            about me
          </Link>
        </li>
        <li>
          {/* <a href="#">work</a> */}
          <Link to="work" smooth={true} duration={500}>
            work
          </Link>
        </li>
        <li>
          {/* <a href="#">contact</a> */}
          <Link to="contact" smooth={true} duration={500}>
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
`;
export default Nav;
