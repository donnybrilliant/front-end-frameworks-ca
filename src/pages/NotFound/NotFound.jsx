import { StyledMain, StyledLink } from "./NotFound.styled";

const NotFound = () => {
  return (
    <StyledMain>
      <h1>404: Not Found</h1>
      <StyledLink to="/">Go Home</StyledLink>
    </StyledMain>
  );
};

export default NotFound;
