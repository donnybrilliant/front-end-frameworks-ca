import { Nav, NavItem, NavUl, StyledLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Nav>
      <NavUl>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavItem>
      </NavUl>
    </Nav>
  );
};

export default Navigation;
