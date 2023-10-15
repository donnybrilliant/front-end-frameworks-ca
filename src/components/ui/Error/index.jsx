import BackLink from "../BackLink";
import { ErrorContainer } from "./styled";

// Component to display an error
const Error = ({ children }) => {
  return (
    <ErrorContainer>
      <h1>{children}</h1>
      <BackLink>Go Home</BackLink>
    </ErrorContainer>
  );
};

export default Error;
