import { StyledContainer } from "./Container.styled";

const Container = ({ $width, children }) => {
  return <StyledContainer $width={$width}>{children}</StyledContainer>;
};

export default Container;
