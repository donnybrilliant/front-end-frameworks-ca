import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
// need to align the active link with the others - on baseline?
 margin-block: 3rem;
 & > * {
    margin-inline-end: 1rem;
 }
`;

export const StyledNavLink = styled(NavLink)`
padding: 0.5rem;
border: 2px solid black;
border-radius: 15px;
box-shadow: 5px 5px 0 black;
background-color: white;
`;