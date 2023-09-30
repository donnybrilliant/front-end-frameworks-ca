import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &  a:hover {
            transform: scale(1.2);
        
    }
    
`;

export const Logo = styled(Link)`
    text-decoration: none;
    padding: 1rem;
    display: flex;
    align-items: center;
    & > i {
        margin-right: 0.5rem;


    }
    & > span {
        font-family: 'IBM Plex Mono', Arial, Helvetica, sans-serif;
   

    @media (max-width: 270px) {
    display: none;
    }}
`;

export const MenuContainer = styled.div`
    display: flex;
`;

export const MenuButton = styled.button`
    padding: 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 4rem; 
  

    @media (min-width: 600px) {
        display: none;
    }
`;
