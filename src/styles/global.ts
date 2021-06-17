import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    line-height: 1.15;
    text-size-adjust: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    min-height: 100%;
  }

  #__next {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --background: #F0F2F5;
    --text: #666666;
    --button: #0061ff;
    --link: #0061ff
  }

  body {
    color: var(--title);
  }

  body, input, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    outline: none;
  }

  a {
    text-decoration: none;
  }
`;
