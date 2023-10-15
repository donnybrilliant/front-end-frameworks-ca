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
import { StyledHeader, Logo, MenuContainer, MenuButton } from "./styled";

// Component to display the header, including the logo, navigation and cart icon
const Header = () => {
  const [extendedNav, setExtendedNav] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  // Add an event listener to the document to close the menu when the user clicks outside of it
  useEffect(() => {
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

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, []);

  // Close the mobile menu when the location changes
  useEffect(() => {
    setExtendedNav(false);
  }, [location]);

  return (
    <StyledHeader ref={headerRef}>
      <Logo to="/" title="Go to Home" reloadDocument>
        <FontAwesomeIcon icon={faCreditCard} size="2x" />
        <span>SHOP</span>
      </Logo>
      <Navigation isExtended={extendedNav} />
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
