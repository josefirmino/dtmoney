import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --Background: #f0f2f5;
    --Red: #E52E4D;
    --Green: #33CC95;  
    --Blue: #5429CC;  

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


  /* Modal */

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 57.6rem;
    background-color: var(--Background);
    padding: 6.4rem 4.8rem;
    border-radius: .5rem;
    position: relative;
  }

  .react-modal-close{
    display: flex;
    position: absolute;
    cursor: pointer;
    height: 40px;
    width: 40px;
    right: 0.8rem;
    top: 0.8rem;
    transition: transform .25s, opacity .25s;
	  opacity: .7;
    &:hover{
      opacity: 1;
	    transform: rotate(90deg);
    }
    img {
      padding: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
