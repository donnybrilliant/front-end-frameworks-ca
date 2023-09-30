import { Link } from "react-router-dom";
import { StyledButton, StyledCount } from "./CartIcon.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartIcon = ({ cart }) => {
  const itemCount =
    cart?.reduce((total, product) => total + product.quantity, 0) || null;

  return (
    <div>
      <Link to="/cart" title="Go to Shopping cart">
        <StyledButton>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
          <StyledCount>{itemCount}</StyledCount>
        </StyledButton>
      </Link>
    </div>
  );
};

export default CartIcon;
