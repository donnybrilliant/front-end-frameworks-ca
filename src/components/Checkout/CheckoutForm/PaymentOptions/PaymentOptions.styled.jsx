import styled from "styled-components";

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
