import styled from "styled-components";

/* export const SliderInput = styled.input`
  width: 100px;
`; */

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

  /* Track styles */
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

  /* Thumb styles */
  &::-webkit-slider-thumb {
    margin-top: -6px; /* Half of the difference between thumb height and track height */
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white; /* Change to white */
    cursor: pointer;
    box-shadow: none;
    border: 2px solid black; /* Add black border */
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 2px solid black; /* Add black border */
    border-radius: 50%;
    background: white; /* Change to white */
    cursor: pointer;
  }

  /* Mozilla's progress */
  &::-moz-range-progress {
    background-color: #4caf50;
  }

  /* Remove focus styles */
  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-runnable-track {
    background: #d3d3d3;
  }

  &:hover::-webkit-slider-runnable-track,
  &:active::-webkit-slider-runnable-track {
    background: #d3d3d3;
  }
`;
