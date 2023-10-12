import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import CartIcon from "./CartIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { StyledHeader, Logo, MenuContainer, MenuButton } from "./Header.styled";

const Header = () => {
  const [extendedNav, setExtendedNav] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    // Add a click event listener to the document
    const closeMenuOnOutsideClick = (event) => {
      // Check if the click target is within the Header component
      if (headerRef.current && headerRef.current.contains(event.target)) {
        return;
      }

      // If not, close the menu
      setExtendedNav(false);
    };

    // Attach the event listener
    document.addEventListener("click", closeMenuOnOutsideClick);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, []);

  useEffect(() => {
    setExtendedNav(false);
  }, [location]);

  return (
    <StyledHeader ref={headerRef}>
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
