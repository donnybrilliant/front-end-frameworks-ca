import { ToggleButton } from "./Toggle.styled";
import { ThemeContext } from "../Theme";
import { useContext } from "react";

const Toggle = () => {
  const { isToggled, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <ToggleButton
        onClick={toggleTheme}
        $isToggled={isToggled}
        title="Toggle corners"
      ></ToggleButton>
    </div>
  );
};

export default Toggle;
