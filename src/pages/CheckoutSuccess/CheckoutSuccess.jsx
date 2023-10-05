import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getTotalPrice } from "../../utils";
import Breadcrumbs from "../../components/Breadcrumbs";
import {
  StyledLi,
  Container,
  HomeLink,
  FlexContainer,
  Info,
  List,
} from "../CheckoutSuccess/CheckoutSuccess.styled";

const CheckoutSuccess = ({ clearCart }) => {
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
    <main>
      <Container>
        <Breadcrumbs />
        <h1>Checkout Success</h1>
        <h2>Order Summary</h2>
        <FlexContainer>
          <List>
            <ul>
              {cart.map((product) => (
                <StyledLi key={product.id}>
                  <img src={product.imageUrl} alt={product.title} />
                  <div>
                    <h3>
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h3>
                    <p>Price: {product.discountedPrice}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </StyledLi>
              ))}
            </ul>
            <p>Total Price: {getTotalPrice(cart)}</p>
          </List>
          <Info>
            <h3>User Information</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Shipping Address: {formData.shippingAddress}</p>
            <p>Billing Address: {formData.billingAddress}</p>
          </Info>
        </FlexContainer>
        <HomeLink>
          <Link to="/">Back to Home</Link>
        </HomeLink>
      </Container>
    </main>
  );
};

export default CheckoutSuccess;
