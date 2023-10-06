import styled from "styled-components";

export const ProductContainer = styled.li`
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

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.large} ${theme.colors.black}`};
  }

  img {
    border-radius: ${({ theme }) =>
      `${theme.borderRadius.regular} 0 0 ${theme.borderRadius.regular}`};
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  s {
    color: ${({ theme }) => theme.colors.warning};
    margin-bottom: -1rem;
  }
`;
export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-right: 1rem;
    font-size: 1.2rem;
    &:hover {
      transform: scale(1.05);
    }
  }

  span {
    background-color: ${({ theme }) => theme.colors.attention};
    padding: 0.5rem;
    border-radius: ${({ theme }) =>
      `${theme.borderRadius.regular} 0 0 ${theme.borderRadius.regular}`};
    font-size: 0.75rem;
  }
`;

export const PriceAndButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    width: 120px;
  }

  a {
    display: flex;
  }

  a,
  button {
    flex-grow: 1;
  }
`;
