import { StyledHeader, Logo, MenuContainer, MenuButton } from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faBars } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../Navigation";
import CartIcon from "../CartIcon";

const Header = () => {
  return (
    <StyledHeader>
      <Logo to="/" title="Go to Home" reloadDocument>
        <FontAwesomeIcon icon={faCreditCard} size="2x" />
        <span>SHOP</span>
      </Logo>
      <Navigation />
      <MenuContainer>
        <CartIcon />
        <MenuButton title="Open Navigation">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </MenuButton>
      </MenuContainer>
    </StyledHeader>
  );
};

export default Header;
