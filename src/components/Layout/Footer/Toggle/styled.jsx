import styled from "styled-components";

export const ToggleButton = styled.button`
  cursor: pointer;
  width: 25px;
  height: 25px;
  border: none;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ $isToggled }) => ($isToggled ? "50%" : "0")};
  transition: border-radius 0.2s ease-out;
`;
