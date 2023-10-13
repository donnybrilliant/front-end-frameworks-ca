import { Link } from "react-router-dom";
import { List, CartItem } from "./OrderSummary.styled";

// Component to display the order summary in the Checkout Success page
const OrderSummary = ({ cart, totalPrice }) => {
  return (
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
      <h4>Total Price: ${totalPrice}</h4>
    </List>
  );
};

export default OrderSummary;
