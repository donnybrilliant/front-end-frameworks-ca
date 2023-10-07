import { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";

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
  const [hueShift, setHueShift] = useState(0);

  const toggleTheme = () => {
    setToggled((prevState) => !prevState);
  };

  const handleSliderChange = (value) => {
    setHueShift(value);
  };

  const parseHSL = (hslString) => {
    const match = hslString.match(
      /hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%,\s*(\d+(?:\.\d+)?)%\)/i
    );
    if (match) {
      return [
        Math.round(parseFloat(match[1])),
        Math.round(parseFloat(match[2])),
        Math.round(parseFloat(match[3])),
      ];
    }
    console.error("Failed to parse HSL:", hslString);
    return null; // instead of returning [0, 0, 0]
  };

  const adjustHue = (hslString, hueShift) => {
    const parsedHSL = parseHSL(hslString);
    if (!parsedHSL) {
      throw new Error(`Invalid HSL string provided: ${hslString}`);
    }

    const [h, s, l] = parsedHSL;

    let adjustedHue = (h + hueShift + 360) % 360;
    let adjustedSaturation = s;

    // If hueShift is 360, desaturate the color
    if (hueShift === 360) {
      adjustedHue = h; // Reset hue to original
      adjustedSaturation = 0; // Desaturate
    }

    return `hsl(${adjustedHue}, ${adjustedSaturation}%, ${l}%)`;
  };

  const adjustThemeColors = (themeColors, hueShift) => {
    let adjustedColors = {};

    for (let colorName in themeColors) {
      const colorValue = themeColors[colorName];
      const adjustedColor = adjustHue(colorValue, hueShift);
      adjustedColors[colorName] = adjustedColor;
    }

    return adjustedColors;
  };

  const adjustedColors = adjustThemeColors(theme.colors, hueShift);

  const adjustedTheme = {
    ...theme,
    colors: adjustedColors,
  };

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
