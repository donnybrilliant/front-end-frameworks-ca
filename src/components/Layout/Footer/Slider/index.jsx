import { useState, useEffect, useCallback } from "react";
import useTheme from "../../../../hooks/useTheme";
import { debounce } from "../../../../utils";
import { SliderInput } from "./styled";

// Component to display the slider to adjust the theme colors
const Slider = () => {
  const { hueShift, handleSliderChange } = useTheme();
  const [sliderValue, setSliderValue] = useState(hueShift); // Local state for slider

  const handleImmediateChange = (e) => {
    const newSliderValue = parseInt(e.target.value);
    setSliderValue(newSliderValue); // Instant update for the slider's movement
  };

  const handleDebouncedChange = useCallback(
    debounce((value) => {
      handleSliderChange(value);
    }, 150),
    [handleSliderChange]
  );

  useEffect(() => {
    handleDebouncedChange(sliderValue); // Update theme based on debounced value
  }, [sliderValue, handleDebouncedChange]);

  return (
    <SliderInput
      type="range"
      min="0"
      max="360"
      title="Adjust theme colors"
      value={sliderValue}
      onChange={(e) => handleImmediateChange(e)}
    />
  );
};

export default Slider;
