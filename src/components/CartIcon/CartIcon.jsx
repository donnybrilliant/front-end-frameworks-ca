import { Link } from "react-router-dom";
import { StyledButton, StyledCount } from "./CartIcon.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
  return (
    <div>
      <Link to="/cart" title="Go to Shopping cart">
        <StyledButton>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
          <StyledCount>0</StyledCount>
        </StyledButton>
      </Link>
    </div>
  );
};

export default CartIcon;
