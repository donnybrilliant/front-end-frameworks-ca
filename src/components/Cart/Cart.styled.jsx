import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 1000px;
  margin-inline: auto;
`;

export const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CheckoutContainer = styled.div`
  text-align: right;
  margin-block: 4rem;
  > p {
    margin-bottom: 3rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > a {
    cursor: pointer;
    height: fit-content;
    margin-top: 2rem;
    margin-left: 1rem;
    text-decoration: underline;
    font-size: 1.2rem;
    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;
