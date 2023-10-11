import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const popAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  80% {
   transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const CartLink = styled.div`
  padding: 1rem;
  span {
    font-size: 2.8rem;
    translate: 0 -5px;
    background-color: ${({ theme }) => theme.colors.active};
    &.animate {
      animation: ${popAnimation} 0.5s ease-in;
      &.fa-layers-counter {
        opacity: 0;
        visibility: hidden;
      }
      &.visible {
        opacity: 1;
        visibility: visible;
      }
    }
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
