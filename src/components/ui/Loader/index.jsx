import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { LoaderContainer } from "./styled";

// Component to display a loader
const Loader = () => {
  return (
    <LoaderContainer>
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
    </LoaderContainer>
  );
};

export default Loader;
