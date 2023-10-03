import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 5px 5px 0 ${({ theme }) => theme.colors.black};
  font-size: 1.2rem;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.attention};
    box-shadow: 10px 10px 0 ${({ theme }) => theme.colors.black};
  }
`;
