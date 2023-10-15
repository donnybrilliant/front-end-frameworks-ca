import { useEffect, useState, useRef } from "react";
import useCart from "../../../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartLink, StyledNavLink } from "./styled";

// Component to display the cart icon with the number of items in the header
const CartIcon = () => {
  const { cart } = useCart();
  const [animate, setAnimate] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const prevItemCount = useRef(0); // This will store the previous count

  const itemCount = cart?.reduce(
    (total, product) => total + product.quantity,
    0
  );

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false); // Set firstLoad to false after the initial load
      return; // Exit the useEffect, not proceeding to the animation logic
    }

    // Check if not currently animating
    if (itemCount > prevItemCount.current && !isAnimating) {
      // Lock to prevent further animations
      setIsAnimating(true);
      setAnimate(true);
      // Release the lock after the animation
      setTimeout(() => {
        setAnimate(false);
        setIsAnimating(false);
      }, 500);
    }
    prevItemCount.current = itemCount;
  }, [itemCount]);

  return (
    <CartLink>
      <StyledNavLink
        to="/cart"
        title="Go to Shopping cart"
        className="fa-layers fa-fw fa-2x"
      >
        <FontAwesomeIcon icon={faCartShopping} />
        {itemCount > 0 && (
          <span
            className={`fa-layers-counter ${itemCount > 0 ? "visible" : ""} ${
              animate ? "animate" : ""
            }`}
          >
            {itemCount}
          </span>
        )}
      </StyledNavLink>
    </CartLink>
  );
};

export default CartIcon;
