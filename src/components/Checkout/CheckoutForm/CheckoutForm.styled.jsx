import styled from "styled-components";

export const StyledForm = styled.form`
  flex-grow: 1;
  margin-right: 1rem;
  div {
    margin-block: 1rem;
  }

  > div:last-of-type {
    margin-top: 3rem;
    text-align: right;
  }
  input.valid-coupon {
    background-color: ${({ theme }) => theme.colors.success};
  }
`;

export const Coupons = styled.div`
  color: ${({ theme }) => theme.colors.background};
  position: absolute;
  bottom: 4px;
  left: 0;
  cursor: default;
`;
