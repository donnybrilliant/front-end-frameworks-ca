import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: underline;
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
