import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const baseStyles = css`
  padding: 0.5rem;
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => `${theme.shadows.small} ${theme.colors.black}`};
  background-color: ${({ theme }) => theme.colors.white};
  margin-inline: ${(props) =>
    props.$nav ? "0" : props.$category ? "0 0.5rem" : "0.5rem 0"};

  &:hover {
    background-color: ${({ theme }) => theme.colors.attention};
    box-shadow: ${({ theme }) =>
      `${theme.shadows.medium} ${theme.colors.black}`};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.success};
  }

  &.disabled-link {
    color: ${({ theme }) => theme.colors.disabled};
    pointer-events: none;
  }
`;

export const StyledLink = styled(Link)`
  ${baseStyles}
`;

export const StyledNavLink = styled(NavLink)`
  ${baseStyles}
`;
