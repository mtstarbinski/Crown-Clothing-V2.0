import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  font-family: "Fira Sans Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 20px 40px;

  @media screen and (max-width: 800px){
    padding: 10px;
  }
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}


`;