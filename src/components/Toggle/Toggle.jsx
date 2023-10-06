import { useState } from "react";
import { ToggleButton } from "./Toggle.styled";

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);
  console.log(isToggled);
  return (
    <div>
      <ToggleButton
        $isToggled={isToggled}
        onClick={() => setToggled(!isToggled)}
      ></ToggleButton>
    </div>
  );
};

export default Toggle;
