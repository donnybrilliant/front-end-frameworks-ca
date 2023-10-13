import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// Custom React hook to simplify using the theme context
const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a CustomThemeProvider");
  }
  return theme;
};

export default useTheme;
