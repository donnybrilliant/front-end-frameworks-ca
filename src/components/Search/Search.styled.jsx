import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 0.5rem !important;
  font-size: 1rem;
  z-index: 2;
`;

export const Autocomplete = styled.ul`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0;
  width: 100%;
  max-height: 100px;
  overflow-y: scroll;
  top: 75%;
  padding-block: 10px;
  padding-left: 0.5rem;
  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-top: none;
  box-shadow: ${({ theme }) => `${theme.shadows.small} ${theme.colors.black}`};
  border-radius: ${({ theme }) =>
    `0 0 ${theme.borderRadius.regular} ${theme.borderRadius.regular}`};
  z-index: 1;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem !important;
`;
