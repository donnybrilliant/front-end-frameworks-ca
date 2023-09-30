import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: coral;
    border: 2px solid black;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 5px 5px 0 black;
    font-size: 1.2rem;
  
    cursor: pointer;
    &:hover {
        background-color: yellow;
        box-shadow: 10px 10px 0 black;
    }
`;