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
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 15px;
  box-shadow: 10px 10px 0 ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    box-shadow: 15px 15px 0 ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
