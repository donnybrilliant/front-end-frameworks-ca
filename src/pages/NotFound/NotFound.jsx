import { Link } from "react-router-dom";
import { StyledH1 } from "./NotFound.styled";

const NotFound = () => {
  return (
    <>
      <StyledH1>404: Not Found</StyledH1>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default NotFound;
