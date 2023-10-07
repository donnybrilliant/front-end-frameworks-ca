import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CartLink = styled.div`
  padding: 1rem;
  span {
    font-size: 2.8rem;
    translate: 0 -5px;
    background-color: ${({ theme }) => theme.colors.active};
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
