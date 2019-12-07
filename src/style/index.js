import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`;
