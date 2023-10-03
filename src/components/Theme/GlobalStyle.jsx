import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  background-color: ${({ theme }) => theme.colors.white};
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-weight: 200;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "IBM Plex Mono", sans-serif;
  text-transform: uppercase;
}

#root {
  height: 100dvh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
}

header {
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
}

main {
  background-color: ${({ theme }) => theme.colors.primary};
  /* Adds fixed footer*/
  overflow: auto;
  padding: 2rem;
}

footer {
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.black};
}

/* .active {
  color: #ccc;
} */

.disabled-link {
  /* Add your disabled link styles here. For example: */
  color: ${({ theme }) => theme.colors.grey};
  pointer-events: none;
}

ul {
  padding-inline-start: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
}

input:not([type="checkbox"]),
select,
textarea {
  padding: 0.25rem;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  margin-block: 0.2rem;
  width: 100%;
  box-shadow: 5px 5px 0 ${({ theme }) => theme.colors.black};
}

input:optional {
  border-color: gray;
}
input:required:valid,
textarea:required:valid {
  box-shadow: 5px 5px 0 ${({ theme }) => theme.colors.secondary};
}

input[type="checkbox"] {
  margin-block: 1rem;
}

textarea:focus {
  box-shadow: 10px 10px 0 ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.black};
}

input:not([type="checkbox"]):focus {
  box-shadow: 10px 10px 0 ${({ theme }) => theme.colors.black};
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

.payment-icons {
  margin-block: 1rem;
}
/* Hide the radio button */
.payment-icons input[type="radio"] {
  display: none;
}

.payment-icons label {
  cursor: pointer;
  padding: 1rem;
  margin-inline: 0.5rem;
  display: inline-block; /* For applying styles like borders, etc. */
  font-size: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 15px;
  box-shadow: 5px 5px 0 ${({ theme }) => theme.colors.black};
  width: 40px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
}

.payment-icons label:hover {
  box-shadow: 8px 8px 0 ${({ theme }) => theme.colors.black};
}

.payment-icons input[type="radio"]:checked + label {
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 8px 8px 0 ${({ theme }) => theme.colors.black};
}

label {
  font-weight: 400;
}

/* h2:hover {
  transform: scale(1.05);
} */

`;

export default GlobalStyle;
