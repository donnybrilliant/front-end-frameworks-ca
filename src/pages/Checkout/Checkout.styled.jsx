import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin-inline: auto;
`;

export const Heading = styled.div`
  display: flex;
`;

export const CheckoutContainer = styled.div`
  @media (min-width: 759px) {
    display: flex;
    gap: 3rem;
    justify-content: center;
  }
`;

export const OrderSummary = styled.div`
  flex-grow: 1;

  > h4 {
    text-align: right;
  }
`;

export const CartItem = styled.li`
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
  background-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.medium} ${theme.colors.black}`};
    background-color: ${({ theme }) => theme.colors.attention};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 13px 13px 0 0;
    @media (min-width: 267px) {
      min-width: 30px;
      max-width: 100px;
      border-radius: 13px 0 0 13px;
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

export const StyledForm = styled.form`
  flex-grow: 1;
  @media (min-width: 759px) {
    h3 {
      margin-inline: 2rem;
    }
  }
  div {
    margin-block: 1rem;
    margin-inline: 2rem;
  }

  > div:last-of-type {
    margin-top: 3rem;
    text-align: right;
  }
  h3 {
    font-size: 1.4rem;
  }
`;
export const PaymentIcons = styled.div`
  input[type="radio"] {
    display: none;
  }
  label {
    cursor: pointer;
    padding: 0.45rem;
    margin: 0.2rem;
    display: inline-block;
    font-size: 2rem;
    border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
    border-radius: ${({ theme }) => theme.borderRadius.regular};
    box-shadow: ${({ theme }) =>
      `${theme.shadows.small} ${theme.colors.black}`};
    width: 40px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.white};
    &:hover {
      box-shadow: ${({ theme }) =>
        `${theme.shadows.medium} ${theme.colors.black}`};
    }
    @media (min-width: 445px) {
      padding: 1rem;
      margin: 0.5rem;
    }
  }
  input[type="radio"]:checked + label {
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) =>
      `${theme.shadows.medium} ${theme.colors.black}`};
  }
`;

export const PaymentLoginContainer = styled.div`
  padding-block: 1rem;
  a {
    text-decoration: underline;
  }
`;
