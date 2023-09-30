import styled from 'styled-components';

export const MainGrid = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;  // Adjust as needed for space between cards

/*     @media (min-width: 450px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));  // Adjust as needed for card width
    } */

   @media (min-width: 578px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));  // Adjust as needed for card width
    } 
    @media (min-width: 728px) {
        grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));  // Adjust as needed for card width
    }  
`