import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
    </LoaderContainer>
  );
};

export default Loader;
