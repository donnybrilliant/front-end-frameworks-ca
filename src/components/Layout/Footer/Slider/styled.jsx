import styled from "styled-components";

export const SliderInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100px;
  height: 25px;
  background: transparent;
  outline: none;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: none;
  padding: 0;
  margin: 0;

  &::-webkit-slider-runnable-track {
    height: 7px;
    cursor: pointer;
    box-shadow: none;
    background: ${({ theme }) => theme.colors.disabled};
    border-radius: 5px;
    border: none;
  }

  &::-moz-range-track {
    height: 7px;
    cursor: pointer;
    box-shadow: none;
    background: ${({ theme }) => theme.colors.disabled};
    border: none;
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    margin-top: -6px;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    box-shadow: none;
    border: 2px solid black;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.dsabled};
  }

  &:hover::-webkit-slider-runnable-track,
  &:active::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.disabled};
  }
`;
