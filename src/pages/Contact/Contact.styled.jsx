import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 500px;
  margin-inline: auto;
  div {
    margin-block: 1rem;
  }
  button {
    float: right;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
