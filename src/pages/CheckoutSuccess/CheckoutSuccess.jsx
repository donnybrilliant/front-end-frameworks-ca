import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getTotalPrice } from "../../utils";
import Breadcrumbs from "../../components/Breadcrumbs";
import {
  CartItem,
  Container,
  LinkContainer,
  CheckoutContainer,
  Info,
  List,
  Heading,
} from "../CheckoutSuccess/CheckoutSuccess.styled";
import BackLink from "../../components/BackLink";
import useCart from "../../hooks/useCart";

const CheckoutSuccess = () => {
  const { clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, cart } = location.state || {};

  useEffect(() => {
    if (!formData || !cart || cart.length === 0) {
      navigate("/");
    } else {
      clearCart();
    }
  }, []);

  if (!formData || !cart || cart.length === 0) {
    return null;
  }

  return (
    <Container>
      <Breadcrumbs />
      <Heading>
        <h1>Checkout Success</h1>
      </Heading>
      <CheckoutContainer>
        <List>
          <h2>Order Summary</h2>
          <ul>
            {cart.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <CartItem>
                  <img src={product.imageUrl} alt={product.title} />
                  <div>
                    <h3>{product.title}</h3>
                    <p>
                      Price: <b>{product.discountedPrice}</b>
                    </p>
                    <p>
                      Quantity: <b>{product.quantity}</b>
                    </p>
                  </div>
                </CartItem>
              </Link>
            ))}
          </ul>
          <h4>Total Price: ${getTotalPrice(cart)}</h4>
        </List>
        <Info>
          <h2>User Information</h2>
          <p>
            Name: {formData.firstName} {formData.lastName}
          </p>
          <p>Email: {formData.email}</p>
          <h4>Shipping Address</h4>
          <p>Address: {formData.shippingAddress}</p>
          <p>
            City: {formData.shippingCity} {formData.shippingZip}
          </p>
          <p>Country: {formData.shippingCountry}</p>
          {formData.billingAddress && (
            <>
              <h4>Billing Address</h4>
              <p>Address: {formData.billingAddress}</p>
              <p>
                City: {formData.billingCity} {formData.billingZip}
              </p>
              <p>Country: {formData.billingCountry}</p>
            </>
          )}
        </Info>
      </CheckoutContainer>
      <LinkContainer>
        <BackLink to="/">Go Home</BackLink>
      </LinkContainer>
    </Container>
  );
};

export default CheckoutSuccess;
