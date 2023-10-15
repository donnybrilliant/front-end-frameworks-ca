import { StyledButton } from "./styled";

// Component to display a button
const Button = ({ children, onClick, $proceed }) => {
  return (
    <StyledButton onClick={onClick} $proceed={$proceed}>
      {children}
    </StyledButton>
  );
};

export default Button;
