import { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";

const theme = {
  colors: {
    primary: "#f08080",
    secondary: "#4EFFAE",
    tertiary: "#FF7F51",
    attention: "#FFFF04",
    warning: "#FF4E4E",
    success: "#4EFFAE",
    active: "#FF4E4E",
    black: "#000000",
    white: "#FFFFFF",
    disabled: "#d2d2d2",
    grey: "#595959",
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
  },
  translate: {
    small: "-5px -5px",
    regular: "-10px -10px",
  },
  borderRadius: {
    small: "10px",
    regular: "15px",
    image: "13px",
  },
  fonts: {
    heading: "IBM Plex Mono, Arial, Helvetica, sans-serif",
    body: "Inter, Arial, Helvetica, sans-serif",
  },
};

const themeWithoutBorders = {
  ...theme,
  borderRadius: {
    small: "0",
    regular: "0",
    image: "0",
  },
};

const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [isToggled, setToggled] = useState(false);

  const toggleTheme = () => {
    setToggled((prevState) => !prevState);
  };

  const appliedTheme = isToggled ? themeWithoutBorders : theme;
  return (
    <ThemeContext.Provider value={{ isToggled, toggleTheme }}>
      <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { Theme, ThemeContext };
