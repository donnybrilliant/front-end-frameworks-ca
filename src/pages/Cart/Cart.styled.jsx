import styled from "styled-components";

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

  > div:not(:first-of-type) {
    margin-block: 1rem;
  }

  > a {
    margin-inline-start: 1rem;
  }

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.large} ${theme.colors.black}`};
  }

  > div {
    display: flex;
  }

  > div > div {
    padding-bottom: 1rem;
  }

  img {
    width: 150px;
    margin-inline-end: 1rem;
    border-radius: 15px 0 15px 0;

    @media (min-width: 810px) {
      border-radius: 15px 0 0 15px;
    }

    @media (min-width: 810px) {
      border-radius: 15px 0 0 15px;
    }
  }
`;

export const Quantity = styled.div`
  align-items: center;

  > p {
    margin-inline-start: 1rem;
    width: 90px;
  }
  button:first-of-type {
    margin-inline-end: 0.7rem;
  }
  button {
    width: 50px;
  }
`;

export const StyledDiv = styled.div`
  text-align: right;
  margin-block: 4rem;
  > p {
    margin-bottom: 3rem;
  }
`;
