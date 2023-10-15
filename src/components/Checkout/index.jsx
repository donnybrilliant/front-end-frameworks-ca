import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import Breadcrumbs from "../ui/Breadcrumbs";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";
import Container from "../ui/Container";
import { CheckoutContainer, Heading } from "./styled";

// Checkout component that displays the order summary and the checkout form
const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // If there are no items in the cart, redirect to the home page
  useEffect(() => {
    if (!cart || cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  return (
    <Container>
      <Breadcrumbs />
      <Heading>
        <h1>Checkout</h1>
      </Heading>
      <CheckoutContainer>
        <OrderSummary cart={cart} />
        <CheckoutForm cart={cart} />
      </CheckoutContainer>
    </Container>
  );
};

export default Checkout;
