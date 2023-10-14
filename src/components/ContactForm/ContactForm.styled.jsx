import styled from "styled-components";

export const StyledForm = styled.form`
  h1 {
    margin-bottom: 2rem;
  }
  div {
    margin-block: 1rem;
  }
  > div > p {
    margin-block: 3rem;
  }
  > div > div {
    text-align: center;
  }
  button {
    float: right;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
