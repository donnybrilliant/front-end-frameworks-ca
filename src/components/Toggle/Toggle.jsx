import { ToggleButton } from "./Toggle.styled";
import useTheme from "../../hooks/useTheme";

const Toggle = () => {
  const { isToggled, toggleTheme } = useTheme();
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
