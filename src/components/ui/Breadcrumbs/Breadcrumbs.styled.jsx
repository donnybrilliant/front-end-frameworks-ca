import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  @media (min-width: 325px) {
    gap: 1rem;
  }
  margin-block: 1rem;
`;
