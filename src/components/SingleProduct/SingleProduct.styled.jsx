import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 1000px;
  > * {
  }
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    gap: 5rem;
  }
  img {
    max-width: 100%;
    border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
    border-radius: ${({ theme }) => theme.borderRadius.regular};
    box-shadow: ${({ theme }) =>
      `${theme.shadows.regular} ${theme.colors.black}`};
    margin-block: 2rem;
  }

  h5 {
    font-size: 1.2rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & > p {
    margin-inline-end: 0.5rem;
  }
`;

export const AddToCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-block: 1rem;
  margin-top: 2rem;

  h3 {
    margin-inline-end: 1rem;
  }
  @media (max-width: 383px) {
    button {
      flex-grow: 1;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0.5rem;
    border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
    border-radius: ${({ theme }) => theme.borderRadius.regular};
    margin-inline-start: 0.5rem;
    box-shadow: ${({ theme }) =>
      `${theme.shadows.small} ${theme.colors.black}`};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Reviews = styled.div`
  order: 5;
  li {
    border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
    border-radius: ${({ theme }) => theme.borderRadius.regular};
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: ${({ theme }) =>
      `${theme.shadows.regular} ${theme.colors.black}`};
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  div {
    display: flex;
    align-items: center;
    div {
      margin-left: 0.3rem;
    }
  }
`;

export const ImageAndReviews = styled.div``;

export const Info = styled.div`
  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      background-color: ${({ theme }) => theme.colors.attention};
      padding: 0.5rem;
      border-radius: ${({ theme }) => theme.borderRadius.regular};
    }
  }
`;
