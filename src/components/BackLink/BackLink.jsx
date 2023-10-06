import { StyledLink } from "./BackLink.styled";

const BackLink = ({ children }) => {
  return <StyledLink to="/">{children}</StyledLink>;
};

export default BackLink;
