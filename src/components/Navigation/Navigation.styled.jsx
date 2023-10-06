import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: none;
  list-style: none;
  display: ${(props) => props.$extend && "block"};
  position: ${(props) => props.$extend && "absolute"};
  top: ${(props) => props.$extend && "calc(3rem - 1px)"};
  left: ${(props) => props.$extend && "0"};
  width: ${(props) => props.$extend && "100vw"};
  background-color: #fff;
  padding-block: ${(props) => props.$extend && "1rem"};
  border-bottom: ${({ theme }) =>
    `${theme.borders.regular} ${theme.colors.black}`};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;

  @media (min-width: 600px) {
    display: inline-flex;
    border: none;
  }
`;

export const NavUl = styled.ul`
  list-style: none;

  @media (min-width: 600px) {
    display: flex;
    padding-inline-start: 0;
  }
`;

export const NavItem = styled.li`
  padding-inline: 10px;
  @media (max-width: 599px) {
    margin-block: 1rem;
  }
  @media (min-width: 600px) {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: ${({ theme }) => theme.colors.active};
  }
  &:hover {
    text-decoration: underline;
  }
`;
