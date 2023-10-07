import { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";
import { adjustThemeColors } from "./ThemeUtilities";

const theme = {
  colors: {
    primary: "hsl(0, 78.87323943661971%, 72.15686274509804%)",
    secondary: "hsl(152.54237288135593, 100%, 65.29411764705883%)",
    tertiary: "hsl(15.862068965517242, 100%, 65.88235294117646%)",
    attention: "hsl(60, 100%, 50.78431372549019%)",
    warning: "hsl(0, 100%, 65.29411764705883%)",
    success: "hsl(152.54237288135593, 100%, 65.29411764705883%)",
    active: "hsl(0, 100%, 65.29411764705883%)",
    black: "hsl(0, 0%, 0%)",
    white: "hsl(0, 0%, 100%)",
    disabled: "hsl(0, 0%, 82.35294117647058%)",
    grey: "hsl(0, 0%, 34.90196078431372%)",
    background: "hsl(0, 78.87323943661971%, 72.15686274509804%)",
  },
  colorsHEX: {
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

const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [isToggled, setToggled] = useState(false);
  const [hueShift, setHueShift] = useState(0);

  const toggleTheme = () => {
    setToggled((prevState) => !prevState);
  };

  const handleSliderChange = (value) => {
    setHueShift(value);
  };

  // Adjusts the theme colors based on the hue shift
  const adjustedColors = adjustThemeColors(theme.colors, hueShift);

  // Adds new colors to current theme
  const adjustedTheme = {
    ...theme,
    colors: adjustedColors,
  };

  // If the hue shift is 360, return the theme with a white background
  if (hueShift === 360) {
    adjustedTheme.colors.background = "hsl(0, 0%, 100%)";
  }

  // If the theme button is toggled, return the theme without borders
  const appliedTheme = isToggled
    ? {
        ...adjustedTheme,
        borderRadius: { small: "0", regular: "0", image: "0" },
      }
    : adjustedTheme;

  return (
    <ThemeContext.Provider
      value={{
        isToggled,
        toggleTheme,
        handleSliderChange,
      }}
    >
      <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { Theme, ThemeContext };
