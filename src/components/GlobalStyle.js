import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #fff;
        font-family: 'DM Sans', sans-serif;
        /* background-image: url("background.png"); */
    }
    button a {
        color: #5DA399; 
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        letter-spacing: 0.02rem;
        cursor: pointer;
        padding: 1rem 3rem;
        margin-top: 1rem;
        border: 3px solid #5DA399;
        border-radius: 1rem; 
        background: transparent;
        color: #5DA399;
        transition: all 0.5s ease;
        font-family: 'DM Sans', sans-serif;
        &:hover{
            background-color: #5DA399;
            color: #FDFDFD;            
        }
        &:hover a {
            color: #FDFDFD; 
        }
    }
    h1 {
            font-weight: 400;
            font-size: 4rem;
            color: #12141d;
        }
    h2 {
            font-weight: 400;
            font-size: 2.5rem;
            color: #12141d;
        }
    p  {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
        h3{
            color: #333;
            padding: 1.5rem;
        }
        h4 {
            font-weight: bold;
        }
        span {
            font-weight: bold;
            color: #5DA399;
        }
        a{
            font-size: 1.1rem;
            text-decoration: none;
            color: #12141d;
        }
        .subtitle {
            padding: 1rem 0rem;
            color: #12141d;
            font-size: 3rem;
            line-height: 150%;
        }
        img{
            display: block;
        }
`;

export default GlobalStyle;
