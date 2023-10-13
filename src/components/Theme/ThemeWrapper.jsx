import { CustomThemeProvider } from "../../contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import useTheme from "../../hooks/useTheme";

// Component to wrap the theme provider
const ThemeWrapper = ({ children }) => {
  return (
    <CustomThemeProvider>
      <Theme>{children}</Theme>
    </CustomThemeProvider>
  );
};

const Theme = ({ children }) => {
  const { appliedTheme } = useTheme();
  return <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
