import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #fff
    }
    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #000;
        background:transparent;
        color: #000;
        transition: all 0.5s ease;
        &:hover{
            background-color: #000;
            color: white;
        }
    }
    h2 {
            font-weight: lighter;
            font-size: 4rem;
        }
        h3{
            color: #000;
        }
        h4 {
            font-weight: bold;
        }
        span {
            font-weight: bold;
            color: #23d997;
        }
        a{
            font-size: 1.1rem;
        }
        p {
            padding: 3rem 0rem;
            color: #ccc;
            font-size: 1.4rem;
            line-height: 150%;
        }
`;

export default GlobalStyle;
