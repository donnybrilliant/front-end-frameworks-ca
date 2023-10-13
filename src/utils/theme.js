// Parses an HSL string into an array of [hue, saturation, lightness]
export const parseHSL = (hslString) => {
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
  return null;
};

// Changes the hue of a color to either black or white based on the original lightness
export const maxHueAdjustment = (hslString) => {
  const parsedHSL = parseHSL(hslString);
  if (!parsedHSL) return hslString; // Return the original if parsing fails

  const [h, s, l] = parsedHSL;

  // Adjust reds
  if ((h <= 15 || h >= 345) && s > 10) {
    // If it's a shade of red and not gray conver to medium gray
    return "hsl(0, 0%, 50%)";
  }

  // Adjust yellows or any other specific colors
  if (h >= 55 && h <= 65) {
    // Returns yellows as is
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  // Grays should remain gray
  if (s <= 10) {
    return hslString;
  }

  // Convert everything else to either black or white based on original lightness
  const adjustedLightness = l > 50 ? 100 : 0;
  return `hsl(0, 0%, ${adjustedLightness}%)`;
};

// Adjusts the hue of a color by a specified amount
export const adjustHue = (hslString, hueShift) => {
  if (hueShift === 360) {
    return maxHueAdjustment(hslString);
  }

  const parsedHSL = parseHSL(hslString);
  if (!parsedHSL) {
    throw new Error(`Invalid HSL string provided: ${hslString}`);
  }

  const [h, s, l] = parsedHSL;
  let adjustedHue = (h + hueShift + 360) % 360;
  return `hsl(${adjustedHue}, ${s}%, ${l}%)`;
};

// Adjusts the hue of all colors in a theme by a specified amount
export const adjustThemeColors = (themeColors, hueShift) => {
  let adjustedColors = {};

  for (let colorName in themeColors) {
    const colorValue = themeColors[colorName];
    const adjustedColor = adjustHue(colorValue, hueShift);
    adjustedColors[colorName] = adjustedColor;
  }

  return adjustedColors;
};
