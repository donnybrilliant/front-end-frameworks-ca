import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => `${theme.shadows.small} ${theme.colors.black}`};
  font-size: 1.2rem;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.attention};
    box-shadow: ${({ theme }) =>
      `${theme.shadows.regular} ${theme.colors.black}`};
    translate: ${({ theme }) => theme.translate.small};
  }
`;
