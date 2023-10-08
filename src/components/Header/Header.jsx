import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StyledHeader, Logo, MenuContainer, MenuButton } from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "../Navigation";
import CartIcon from "../CartIcon";

const Header = ({ cart }) => {
  const [extendedNav, setExtendedNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExtendedNav(false);
  }, [location]);

  return (
    <StyledHeader>
      <Logo to="/" title="Go to Home" reloadDocument>
        <FontAwesomeIcon icon={faCreditCard} size="2x" />
        <span>SHOP</span>
      </Logo>
      <Navigation extend={extendedNav} />
      <MenuContainer>
        <CartIcon />
        <MenuButton
          title="Open Navigation"
          onClick={() => setExtendedNav(!extendedNav)}
        >
          {extendedNav ? (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </MenuButton>
      </MenuContainer>
    </StyledHeader>
  );
};

export default Header;
