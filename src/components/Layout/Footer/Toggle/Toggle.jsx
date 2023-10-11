import useTheme from "../../../../hooks/useTheme";
import { ToggleButton } from "./Toggle.styled";

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
