import styled from "styled-components";

export const ProductContainer = styled.li`
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  padding-left: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.regular} ${theme.colors.black}`};

  h2 {
    margin-right: 1rem;
    &:hover {
      transform: scale(1.05);
    }
  }

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.large} ${theme.colors.black}`};
  }

  img {
    border-radius: 15px 0 0 15px;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      background-color: ${({ theme }) => theme.colors.attention};
      padding: 0.5rem;
      border-radius: 15px 0 0 15px;
    }
  }
  s {
    color: ${({ theme }) => theme.colors.warning};
    margin-bottom: -1rem;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;

  p {
    font-size: 1.2rem;
    width: 120px;
  }

  a {
    display: flex;
  }
  & button,
  a {
    font-size: 0.8rem;
  }

  & button,
  a {
    flex-grow: 1;
  }
`;
