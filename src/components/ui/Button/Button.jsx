import { StyledButton } from "./Button.styled";

const Button = ({ children, onClick, $proceed }) => {
  return (
    <StyledButton onClick={onClick} $proceed={$proceed}>
      {children}
    </StyledButton>
  );
};

export default Button;
