import { Nav, NavItem, NavUl, StyledLink } from "./Navigation.styled";

const Navigation = ({ extend }) => {
  return (
    <Nav $extend={extend}>
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
