import styled from "styled-components";
import { StyledContainer } from "../ui/Container/Container.styled";

export const CartContainer = styled(StyledContainer)`
  > a {
    cursor: pointer;
    margin-left: 1rem;
    text-decoration: underline;
    font-size: 1.2rem;
    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
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
