import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #000;
  /* .title {
    width: 70%;
    margin: auto;
  } */
  /* background-image: url("background.png"); */
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  /* flex: 1; */
  overflow: hidden;
  img {
    width: 100%;
    height: 50vh;
    object-fit: scale-down;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
