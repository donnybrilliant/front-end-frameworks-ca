import styled from "styled-components";

export const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-block: 2rem;

  @media (min-width: 493px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  @media (min-width: 660px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media (min-width: 728px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
