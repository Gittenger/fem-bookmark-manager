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
  font-size: 1.8rem;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.darkBlue};
}

p{
  color: ${({ theme: { colors } }) => colors.greyBlue};
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

button {
    font-family: "Rubik", sans-serif;
}

#root {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
`;

export default GlobalStyles;
