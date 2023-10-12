import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import Breadcrumbs from "../Breadcrumbs";
import OrderSummary from "./CheckoutForm/OrderSummary";
import CheckoutForm from "./CheckoutForm";
import { CheckoutContainer, Container, Heading } from "./Checkout.styled";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

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
