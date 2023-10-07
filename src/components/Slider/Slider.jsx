import { useContext, useState, useEffect, useCallback } from "react";
import { ThemeContext } from "../Theme";
import { SliderInput } from "./Slider.styled";

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const Slider = () => {
  const { handleSliderChange, hueShift } = useContext(ThemeContext);
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
      value={sliderValue}
      onChange={(e) => handleImmediateChange(e)}
    />
  );
};

export default Slider;
