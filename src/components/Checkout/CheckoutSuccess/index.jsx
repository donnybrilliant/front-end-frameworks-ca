import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useTheme from "../../../hooks/useTheme";
import Breadcrumbs from "../../ui/Breadcrumbs";
import Container from "../../ui/Container";
import OrderSummary from "../OrderSummary";
import Information from "./Information";
import BackLink from "../../ui/BackLink";
import { CheckoutContainer, Heading } from "../styled";
import { LinkContainer } from "./styled";

// CheckoutSuccess component that displays the order summary and the information of the user
const CheckoutSuccess = () => {
  const { clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { formData, cart, totalPrice } = location.state || {};

  // If there are no items in the cart, redirect to the home page
  useEffect(() => {
    if (!formData || !cart || cart.length === 0) {
      navigate("/");
    } else {
      // Change the background color of the page to the success color
      document.querySelector("main").style.backgroundColor =
        theme.appliedTheme.colors.success;
      clearCart();
      // Return the background color to the default color
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
