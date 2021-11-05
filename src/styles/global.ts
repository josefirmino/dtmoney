import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --Background: #f0f2f5;
    --Red: #E52E4D;
    --Blue: #5429CC;  
    --Green: #33CC95;  

    --Blue-light: #6933ff;

    --Text-title: #363f5f;
    --Text-body: #969cb3;

    --Shape: #ffffff;
    
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  // font-size: 16px (Desktop);
  html{
    font-size: 62.5%;
    
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body{
    background-color: var(--Background);
    -webkit-font-smoothing: antialiased;
    &::-webkit-scrollbar {
      width: 5px;
      background-color: #ffffff;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background-color: #242424;
    }
  }

  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  button,
  a {
    background-color: transparent;
    cursor: pointer;
  }

  [disabled]{
    opacity: 0;
    cursor: not-allowed;
  }
`;
