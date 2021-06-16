import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    height: 100%;
  }

  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
    min-height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
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
