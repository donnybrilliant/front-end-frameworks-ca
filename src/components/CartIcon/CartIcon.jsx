import { CartLink, StyledNavLink } from "./CartIcon.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartIcon = ({ cart }) => {
  const itemCount =
    cart?.reduce((total, product) => total + product.quantity, 0) || null;

  return (
    <CartLink>
      <StyledNavLink
        to="/cart"
        title="Go to Shopping cart"
        className="fa-layers fa-fw fa-2x"
      >
        <FontAwesomeIcon icon={faCartShopping} />
        {itemCount > 0 && (
          <span className="fa-layers-counter">{itemCount}</span>
        )}
      </StyledNavLink>
    </CartLink>
  );
};

export default CartIcon;
