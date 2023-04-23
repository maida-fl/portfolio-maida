import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#">Logo</a>
      </h1>
      <ul>
        <li>
          <a href="#">about me</a>
        </li>
        <li>
          <a href="#">work</a>
        </li>
        <li>
          <a href="#">contact</a>
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
