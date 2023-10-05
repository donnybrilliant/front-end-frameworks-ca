import styled from "styled-components";

export const StyledForm = styled.form`
  div {
    margin-block: 1rem;
  }

  > div:last-of-type {
    margin-top: 3rem;
    text-align: right;
  }
  h3 {
    font-size: 1.4rem;
  }
`;

export const StyledLi = styled.li`
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

export const PaymentLoginContainer = styled.div`
  padding-block: 1rem;
  a {
    text-decoration: underline;
  }
`;

export const OrderSummary = styled.div`
  flex-grow: 1;

  > h4 {
    text-align: right;
  }
`;

export const CheckoutContainer = styled.div`
  @media (min-width: 678px) {
    display: flex;
    gap: 3rem;
    justify-content: center;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin-inline: auto;
`;

export const PaymentIcons = styled.div`
  input[type="radio"] {
    display: none;
  }
  label {
    cursor: pointer;
    padding: 0.5rem;
    margin: 0.5rem;
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
  }
  input[type="radio"]:checked + label {
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) =>
      `${theme.shadows.medium} ${theme.colors.black}`};
  }
`;
