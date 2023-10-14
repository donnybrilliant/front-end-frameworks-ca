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
  input#coupon.valid-coupon:focus {
    background-color: ${({ theme }) => theme.colors.success};
  }
  input#coupon.valid-coupon:not(:focus) {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.small} ${theme.colors.success}`};
  }
  input#coupon:not(:focus):not(:placeholder-shown):not(.valid-coupon) {
    background-color: ${({ theme }) => theme.colors.warning};
  }
`;

export const Coupons = styled.div`
  color: ${({ theme }) => theme.colors.background};
  position: absolute;
  bottom: 4px;
  left: 0;
  cursor: default;
`;
