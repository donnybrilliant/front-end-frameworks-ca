import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin-inline: auto;
`;

export const Heading = styled.div`
  display: flex;
`;

export const CheckoutContainer = styled.div`
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
`;

export const List = styled.div`
  flex-grow: 1;
  > h4 {
    text-align: right;
  }
`;
export const CartItem = styled.li`
  max-width: 500px;
  padding-bottom: 1rem;
  @media (min-width: 267px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 125px;
    padding-bottom: 0;
  }

  margin-block: 2rem;

  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => `${theme.shadows.small} ${theme.colors.black}`};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.medium} ${theme.colors.black}`};
    background-color: ${({ theme }) => theme.colors.attention};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) =>
      `${theme.borderRadius.image} ${theme.borderRadius.image} 0 0`};
    @media (min-width: 267px) {
      min-width: 30px;
      max-width: 100px;
      border-radius: ${({ theme }) =>
        `${theme.borderRadius.image} 0 0 ${theme.borderRadius.image}`};
    }
  }

  div {
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    margin-inline: 0.5rem;

    h3 {
      margin-block: 0;
    }

    p {
      margin-top: 0.3rem;
      margin-bottom: 0;
    }
  }
`;

export const Info = styled.div`
  flex-grow: 1;
`;

export const LinkContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;
