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
  StyledThing,
} from "../CheckoutSuccess/CheckoutSuccess.styled";
import BackLink from "../../components/BackLink";

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
    <Container>
      <Breadcrumbs />
      <StyledThing>
        <h1>Checkout Success</h1>
      </StyledThing>
      <FlexContainer>
        <List>
          <h2>Order Summary</h2>
          <ul>
            {cart.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <StyledLi>
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
                </StyledLi>
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
      </FlexContainer>
      <HomeLink>
        <BackLink to="/">Go Home</BackLink>
      </HomeLink>
    </Container>
  );
};

export default CheckoutSuccess;
