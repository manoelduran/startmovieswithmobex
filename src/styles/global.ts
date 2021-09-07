import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root, body, html {
    height: 100%;
    width: 100%;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    }
    @media (max-width: 300px){
      font-size: 81.25%; // 13px
    }
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;
