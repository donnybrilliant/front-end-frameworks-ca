import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CartLink = styled.div`
  padding: 1rem;
  span {
    font-size: 2.5rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${({ theme }) => theme.colors.active};
    span {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }
`;
