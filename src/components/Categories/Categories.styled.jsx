import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: -2rem;
  margin-top: -0.25rem;
`;

export const CategoriesList = styled.div`
  overflow: auto;
  white-space: nowrap;
  padding-block: 2rem;
`;

export const ScrollButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem;
  outline: none;
  .scroll-left {
    left: 0;
  }

  .scroll-right {
    right: 0;
  }
`;
