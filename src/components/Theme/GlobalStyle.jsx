import { createGlobalStyle } from "styled-components";

// Global styles for the app
const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.black};
  * {
    transition: border-radius 0.2s ease-out;
  }
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

b {
  font-weight: 500;
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
  background-color: ${({ theme }) => theme.colors.background};
  overflow: auto;
  padding: 2rem;
}

footer {
  background-color: ${({ theme }) => theme.colors.white};
  border-top: ${({ theme }) =>
    `${theme.borders.regular} ${theme.colors.black}`};
}

ul {
  margin: 0;
  padding-inline-start: 0;
  list-style-type: none;
}

label {
  font-weight: 400;

}/* Default styles for most inputs */
input:not([type="checkbox"],[type="range"], [type="radio"]),
select,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-block: 0.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  box-shadow: ${({ theme }) => `${theme.shadows.small} ${theme.colors.black}`};
}

/* Specific style for checkboxes */
input[type="checkbox"] {
  margin-block: 1rem;
}

/* Styles when focused */
input:not([type="checkbox"],[type="range"], [type="radio"]):focus, 
textarea:focus, select:focus {
  outline: none;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.regular} ${theme.colors.black}`};
}

/* Styles for valid required fields */
input:not(:focus):required:valid,
textarea:not(:focus):required:valid {
  box-shadow: ${({ theme }) =>
    `${theme.shadows.small} ${theme.colors.success}`};
}

/* Special background color for valid required fields in focus */
input:required:focus:valid {
  background-color: ${({ theme }) => theme.colors.success};
  background-size: 25px;
}

/* Background color for invalid fields that aren't focused and don't have a placeholder */
input:required:not(:focus):not(:placeholder-shown):invalid,
textarea:required:not(:focus):not(:placeholder-shown):invalid {
  background-color: ${({ theme }) => theme.colors.warning};
}

/* Styling for select elements */
select {
font-size: 1rem;
background-color: ${({ theme }) => theme.colors.white};
color: ${({ theme }) => theme.colors.black};
}
`;

export default GlobalStyle;
