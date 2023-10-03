import { useState } from "react";
import { ToggleButton } from "./Toggle.styled";

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);
  return (
    <div>
      <ToggleButton toggled={isToggled} onClick={() => setToggled(!isToggled)}>
        {isToggled ? "ON" : "OFF"}
      </ToggleButton>
    </div>
  );
};

export default Toggle;
