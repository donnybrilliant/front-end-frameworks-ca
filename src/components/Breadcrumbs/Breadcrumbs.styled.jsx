import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  @media (min-width: 325px) {
    gap: 1rem;
  }
`;

// extend Buttons instead?
export const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => `${theme.shadows.small} ${theme.colors.black}`};
  background-color: ${({ theme }) => theme.colors.white};
  &.active {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.medium} ${theme.colors.black}`};
  }
`;
