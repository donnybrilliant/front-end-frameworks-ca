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

export const LinkContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;
