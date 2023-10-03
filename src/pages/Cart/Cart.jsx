import { Link } from "react-router-dom";
import { getTotalPrice } from "../../utils";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";
import { StyledLi, StyledDiv, Quantity } from "./Cart.styled";

const CartPage = ({ cart, updateProductQuantity }) => {
  return (
    <main>
      {cart && cart?.length !== 0 && <Breadcrumbs />}
      <h1>Cart</h1>
      <Link to={"/"}>Continue Shopping</Link>
      {cart && cart?.length !== 0 ? (
        <>
          <ul>
            {cart.map((product) => (
              <StyledLi key={product.id}>
                <div>
                  <img src={product.imageUrl} alt={product.title} />{" "}
                  {/* Adjust the image styles as needed */}
                  <div>
                    <h2>
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h2>
                    <p>
                      Price: <b>${product.discountedPrice}</b>
                    </p>
                    {product.price - product.discountedPrice !== 0 && (
                      <p>
                        Discount:{" "}
                        <b>${product.price - product.discountedPrice}</b>
                      </p>
                    )}

                    {product.quantity > 0 && (
                      <p>
                        Total Price for this Item: $
                        {(product.quantity * product.discountedPrice).toFixed(
                          2
                        )}
                      </p>
                    )}
                  </div>
                </div>
                <Link to={`/product/${product.id}`}>
                  <Button>View Product</Button>
                </Link>

                <Quantity>
                  <p>
                    Quantity: <b>{product.quantity}</b>
                  </p>

                  <Button
                    onClick={() =>
                      updateProductQuantity(product.id, product.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <Button
                    onClick={() =>
                      updateProductQuantity(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </Quantity>
              </StyledLi>
            ))}
          </ul>
          <StyledDiv>
            <h3>Total Price: ${getTotalPrice(cart)}</h3>
            <p>Shipping calculated at checkout</p>
            <Link to="/checkout">
              <Button>Proceed to Checkout</Button>
            </Link>
          </StyledDiv>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </main>
  );
};

export default CartPage;
