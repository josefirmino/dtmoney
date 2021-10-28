import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
    
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
    font-family: "Raleway", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
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
    background-color: var(--background);
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
