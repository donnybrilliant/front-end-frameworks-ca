import { ThemeProvider } from "styled-components";
import useTheme from "../../hooks/useTheme";

const Theme = ({ children }) => {
  const { appliedTheme } = useTheme();
  return <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>;
};

export default Theme;
