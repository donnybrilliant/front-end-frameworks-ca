import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "var(--color-primary)",
        secondary: "#FF4E4E",
        tertiary: "#FFAE4E",
        black: "#000000",
        white: "#FFFFFF",
        grey: "#F2F2F2",
        lightGrey: "#F2F2F2",
        darkGrey: "#333333",
        lightBlue: "#4EFFAE",
        darkBlue: "#4EFFAE",
        lightGreen: "#4EFFAE",
        darkGreen: "#4EFFAE",
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;