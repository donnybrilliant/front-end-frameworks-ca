import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getTotalPrice } from "../../utils";
import Breadcrumbs from "../../components/Breadcrumbs";

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
      <Breadcrumbs />
      <h1>Checkout Success</h1>
      <h2>Order Summary</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: {product.discountedPrice}</p>
            <p>Quantity: {product.quantity}</p>
          </li>
        ))}
      </ul>
      <p>Total Price: {getTotalPrice(cart)}</p>

      <h3>User Information</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Shipping Address: {formData.shippingAddress}</p>
      <p>Billing Address: {formData.billingAddress}</p>

      <Link to="/">Back to Home</Link>
    </main>
  );
};

export default CheckoutSuccess;
