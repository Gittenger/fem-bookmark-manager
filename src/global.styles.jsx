import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 2rem;
}

ul,
li {
  list-style: none;
}

a:link,
a:visited {
  color: unset;
}

a {
  text-decoration: none;
}

.App{
  display: grid;
  grid-template-columns: 1fr;
}
`;

export default GlobalStyles;
