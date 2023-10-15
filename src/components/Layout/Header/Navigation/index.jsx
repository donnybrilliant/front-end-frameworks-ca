import { Nav, NavItem, NavUl, StyledLink } from "./styled";

// Component to display the navigation links
const Navigation = ({ isExtended }) => {
  return (
    <Nav $isExtended={isExtended}>
      <NavUl>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/sale">SALE</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/categories">Categories</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavItem>
      </NavUl>
    </Nav>
  );
};

export default Navigation;
