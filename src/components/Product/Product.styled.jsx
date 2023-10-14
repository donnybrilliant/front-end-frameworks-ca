import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 1000px;
  margin-inline: auto;
  @media (min-width: 768px) {
    display: flex;
    gap: 5rem;
  }
`;

export const Info = styled.div`
  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const Description = styled.div`
  > div {
    margin-top: 3rem;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    background-color: ${({ theme }) => theme.colors.attention};
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.regular};
  }

  h5 {
    font-size: 1.2rem;
  }
`;

export const RatingsAndTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & > p {
    margin-inline-end: 0.5rem;
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
    &:hover {
      background-color: ${({ theme }) => theme.colors.attention};
      box-shadow: ${({ theme }) =>
        `${theme.shadows.medium} ${theme.colors.black}`};
    }
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
  button {
    @media (max-width: 400px) {
      flex-grow: 1;
    }
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

export const ImageContainer = styled.div`
  img {
    width: 100%;
    border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
    border-radius: ${({ theme }) => theme.borderRadius.regular};
    box-shadow: ${({ theme }) =>
      `${theme.shadows.regular} ${theme.colors.black}`};
    margin-block: 2rem;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;
