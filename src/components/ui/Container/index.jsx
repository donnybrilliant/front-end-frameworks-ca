import { StyledContainer } from "./styled";

// Component to render a container with centered aligning and a max-width
const Container = ({ $width, children }) => {
  return <StyledContainer $width={$width}>{children}</StyledContainer>;
};

export default Container;
