import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;

  a:hover {
    transform: scale(1.2);
  }
`;

export const Logo = styled(Link)`
  padding: 1rem;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
  span {
    font-family: ${({ theme }) => theme.fonts.heading};

    @media (max-width: 270px) {
      display: none;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const MenuButton = styled.button`
  cursor: pointer;
  padding: 1rem;
  border: none;
  background-color: transparent;
  width: 4rem;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 600px) {
    display: none;
  }
`;
