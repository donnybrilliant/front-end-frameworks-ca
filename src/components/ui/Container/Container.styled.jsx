import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: ${({ $width }) => $width || "1000px"};
  margin-inline: auto;
`;
