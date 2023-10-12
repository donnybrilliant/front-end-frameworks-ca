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
