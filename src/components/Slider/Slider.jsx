import { useContext, useCallback } from "react";
import { ThemeContext } from "../Theme";
import { SliderInput } from "./Slider.styled";

function debounce(func, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const Slider = () => {
  const { handleSliderChange } = useContext(ThemeContext);

  const handleChange = (e) => {
    const sliderValue = parseInt(e.target.value);
    handleSliderChange(sliderValue);
  };

  const debouncedSliderChange = useCallback(debounce(handleChange, 150), []);

  return (
    <SliderInput
      type="range"
      min="0"
      max="360"
      defaultValue="0"
      onChange={debouncedSliderChange}
    />
  );
};

export default Slider;
