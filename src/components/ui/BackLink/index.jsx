import { StyledLink } from "./styled";

// Component to display the back link
const BackLink = ({ children }) => {
  return <StyledLink to="/">{children}</StyledLink>;
};

export default BackLink;
