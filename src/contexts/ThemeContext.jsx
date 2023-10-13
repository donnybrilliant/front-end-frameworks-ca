import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { adjustThemeColors } from "../utils/";
import { theme } from "../components/Theme";

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  // Retrieve the toggle and slider button state from local storage
  const [isToggled, setToggled] = useLocalStorage("themeToggled", false);
  const [hueShift, setHueShift] = useLocalStorage("themeHueShift", 0);

  // Function to toggle the theme
  const toggleTheme = () => {
    setToggled((prevState) => !prevState);
  };

  // Function to handle the slider change
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

  // Theme values, toggle method and the slider handling method are passed down as context values
  return (
    <ThemeContext.Provider
      value={{
        isToggled,
        toggleTheme,
        handleSliderChange,
        hueShift,
        appliedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
