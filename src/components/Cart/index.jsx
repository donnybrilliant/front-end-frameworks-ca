import { Link } from "react-router-dom";
import CartItemList from "./CartItemList";
import Breadcrumbs from "../ui/Breadcrumbs";
import Button from "../ui/Button";
import BackLink from "../ui/BackLink";
import { getTotalPrice } from "../../utils";
import { CartContainer, StyledHeading, CheckoutContainer } from "./styled";

// Cart component that displays the cart items and the total price
const Cart = ({ cart, clearCart }) => {
  return (
    <CartContainer>
      {cart && cart?.length !== 0 && <Breadcrumbs />}
      <StyledHeading>
        <h1>Cart</h1>
        <BackLink>Continue Shopping</BackLink>
      </StyledHeading>
      {cart && cart?.length !== 0 ? (
        <>
          <CartItemList cart={cart} />

          <a onClick={() => clearCart()}>Empty Cart</a>
          <CheckoutContainer>
            <h3>Total Price: ${getTotalPrice(cart)}</h3>
            <p>Shipping calculated at checkout</p>
            <Link to="/checkout">
              <Button $proceed>Proceed to Checkout</Button>
            </Link>
          </CheckoutContainer>
        </>
      ) : (
        <h2>Your cart is empty.</h2>
      )}
    </CartContainer>
  );
};

export default Cart;
