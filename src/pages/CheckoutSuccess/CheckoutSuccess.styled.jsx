import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLi = styled.li`
  max-width: 500px;
  @media (min-width: 267px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  margin-block: 2rem;

  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => `${theme.shadows.small} ${theme.colors.black}`};
  background-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.large} ${theme.colors.black}`};
    background-color: ${({ theme }) => theme.colors.white};
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
    @media (min-width: 267px) {
      min-width: 30px;
      max-width: 100px;
      border-radius: 15px 0 0 15px;
    }
  }

  div {
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    margin-inline: 0.5rem;

    p {
      margin-block: 0.3rem;
    }
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin-inline: auto;
`;
export const HomeLink = styled.div`
  text-decoration: underline;
  text-align: center;
  margin-top: 5rem;
  font-size: 1.2rem;
`;

export const FlexContainer = styled.div`
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
`;

export const Info = styled.div`
  flex-grow: 1;
`;

export const List = styled.div`
  flex-grow: 1;
  > p {
    text-align: right;
  }
`;
