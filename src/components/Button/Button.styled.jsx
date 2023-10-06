import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => `${theme.shadows.small} ${theme.colors.black}`};
  font-size: ${(props) => (props.$proceed ? "1.2rem" : "1rem")};
  background-color: ${(props) =>
    props.$proceed
      ? props.theme.colors.secondary
      : props.theme.colors.tertiary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.attention};
    box-shadow: ${({ theme }) =>
      `${theme.shadows.regular} ${theme.colors.black}`};
    translate: ${({ theme }) => theme.translate.small};
  }
`;
