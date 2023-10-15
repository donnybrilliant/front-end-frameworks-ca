import useTheme from "../../../../hooks/useTheme";
import { ToggleButton } from "./styled";

// Component to display the toggle button to change the theme
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
