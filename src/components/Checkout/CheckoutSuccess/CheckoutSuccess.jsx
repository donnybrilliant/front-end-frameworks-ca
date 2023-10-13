import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useTheme from "../../../hooks/useTheme";
import Breadcrumbs from "../../ui/Breadcrumbs";
import OrderSummary from "../OrderSummary";
import Information from "./Information";
import BackLink from "../../ui/BackLink";
import {
  Container,
  LinkContainer,
  CheckoutContainer,
  Heading,
} from "../CheckoutSuccess/CheckoutSuccess.styled";

const CheckoutSuccess = () => {
  const { clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { formData, cart, totalPrice } = location.state || {};

  useEffect(() => {
    if (!formData || !cart || cart.length === 0) {
      navigate("/");
    } else {
      document.querySelector("main").style.backgroundColor =
        theme.appliedTheme.colors.success;
      clearCart();
      return () => {
        document.querySelector("main").style.backgroundColor =
          theme.appliedTheme.colors.background;
      };
    }
  }, []);

  return (
    <Container>
      <Breadcrumbs />
      <Heading>
        <h1>Checkout Success</h1>
      </Heading>
      <CheckoutContainer>
        <OrderSummary cart={cart} totalPrice={totalPrice} />
        <Information formData={formData} />
      </CheckoutContainer>

      <LinkContainer>
        <BackLink to="/">Go Home</BackLink>
      </LinkContainer>
    </Container>
  );
};

export default CheckoutSuccess;
