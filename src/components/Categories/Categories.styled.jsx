import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoriesList = styled.div`
  overflow: auto;
  white-space: nowrap;
  padding-block: 2rem;
`;

export const StyledLink = styled(Link)`
  padding: 0.5rem;
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  margin-inline-end: 0.5rem;
  box-shadow: ${({ theme }) => `${theme.shadows.small} ${theme.colors.black}`};
  background-color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.attention};
    box-shadow: ${({ theme }) =>
      `${theme.shadows.medium} ${theme.colors.black}`};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.success};
  }
`;

export const ScrollButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 1rem;
  outline: none;
  .scroll-left {
    left: 0;
  }

  .scroll-right {
    right: 0;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: -2rem;
  margin-top: -0.25rem;
`;
