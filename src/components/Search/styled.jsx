import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  margin-top: 1rem !important;
  margin-bottom: 3rem !important;
`;

export const SearchInput = styled.input`
  padding: 0.5rem !important;
  font-size: 1rem;
`;

export const Autocomplete = styled.ul`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0;
  width: calc(100% - 0.25rem);
  max-height: 100px;
  overflow-y: scroll;
  top: 70%;
  padding-block: 10px;

  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-top: none;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.regular} ${theme.colors.black}`};
  border-radius: ${({ theme }) =>
    `0 0 ${theme.borderRadius.regular} ${theme.borderRadius.regular}`};
  z-index: 1;

  li {
    padding: 0.5rem;
    border-bottom: ${({ theme }) =>
      `${theme.borders.regular} ${theme.colors.black}`};

    &:hover {
      background-color: ${({ theme }) => theme.colors.attention};
      font-weight: 500;
    }
  }
`;
