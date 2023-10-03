import styled from "styled-components";

export const StyledForm = styled.form`
  div {
    margin-block: 1rem;
  }
  h3 {
    margin-top: 3rem;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-block: 2rem;
  padding-right: 2rem;
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) =>
    `${theme.shadows.regular} ${theme.colors.black}`};
  background-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.large} ${theme.colors.black}`};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
