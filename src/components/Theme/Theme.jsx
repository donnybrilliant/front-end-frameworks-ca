import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#f08080",
    secondary: "#4EFFAE",
    tertiary: "#FF7F51",
    attention: "#FFFF04",
    warning: "#FF4E4E",
    black: "#000000",
    white: "#FFFFFF",
    grey: "#F2F2F2",
    lightGrey: "#F2F2F2",
    darkGrey: "#333333",
    lightBlue: "#4EFFAE",
    darkBlue: "#4EFFAE",
    lightGreen: "#4EFFAE",
    balbalb: "#4EFFAE",
  },
  borders: {
    regular: "2px solid",
  },
  shadows: {
    small: "5px 5px 0",
    medium: "8px 8px 0",
    regular: "10px 10px 0",
    large: "15px 15px 0",
    xl: "20px 20px 0",
    translate: "-10px -10px",
  },
  borderRadius: {
    none: "0",
    regular: "15px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
