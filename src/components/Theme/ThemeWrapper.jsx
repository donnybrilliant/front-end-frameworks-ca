import { Theme } from ".";
import { CustomThemeProvider } from "../../contexts/ThemeContext";

const ThemeWrapper = ({ children }) => {
  return (
    <CustomThemeProvider>
      <Theme>{children}</Theme>
    </CustomThemeProvider>
  );
};

export default ThemeWrapper;
