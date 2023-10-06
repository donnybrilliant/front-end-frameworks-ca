import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  background-color: ${({ theme }) => theme.colors.white};
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.black};
}

a {
  text-decoration: none;
}

a, button {
  color: ${({ theme }) => theme.colors.black};
}

h1,
h2,
h3,
h4,
h5 {
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
}

h5 {
font-size: 1rem;  
}

#root {
  height: 100dvh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  
}

header {
  border-bottom: ${({ theme }) =>
    `${theme.borders.regular} ${theme.colors.black}`};
}

main {
  background-color: ${({ theme }) => theme.colors.primary};
  /* Adds fixed footer*/
  overflow: auto;
  padding: 2rem;
 

}

footer {
  background-color: ${({ theme }) => theme.colors.white};
  border-top: ${({ theme }) =>
    `${theme.borders.regular} ${theme.colors.black}`};
}


.disabled-link {
  color: ${({ theme }) => theme.colors.disabled};
  pointer-events: none;
}

ul {
  padding-inline-start: 0;
  list-style-type: none;
}







// For forms
input:not([type="checkbox"]),
select,
textarea {
  padding: 0.25rem;
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-radius: 10px;
  margin-block: 0.2rem;
  width: 100%;
  box-shadow: ${({ theme }) => `${theme.shadows.small} ${theme.colors.black}`};
}

input:optional {
  border-color: gray;
}
input:required:valid,
textarea:required:valid {
  box-shadow: ${({ theme }) =>
    `${theme.shadows.small} ${theme.colors.secondary}`};
}

input[type="checkbox"] {
  margin-block: 1rem;
}

textarea:focus {
  box-shadow: ${({ theme }) =>
    `${theme.shadows.regular} ${theme.colors.black}`};
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
}

input:not([type="checkbox"]):focus {
  box-shadow: ${({ theme }) =>
    `${theme.shadows.regular} ${theme.colors.black}`};
}

input:required:focus:valid {
  background: url("https://assets.digitalocean.com/labs/icons/hand-thumbs-up.svg")
    no-repeat 95% 50% ${({ theme }) => theme.colors.secondary};
  background-size: 25px;
}
input:focus:invalid {
  background: url("https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg")
    no-repeat 95% 50% ${({ theme }) => theme.colors.warning};
  background-size: 25px;
}



label {
  font-weight: 400;
}

b {
  font-weight: 500;
}


`;

export default GlobalStyle;
