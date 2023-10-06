import { Link } from "react-router-dom";
import { getTotalPrice } from "../../utils";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";
import {
  StyledDiv,
  Quantity,
  StyledHeading,
  CartContainer,
  CartControls,
  ImageContainer,
  HeadingContainer,
  TextContainer,
  ProductContainer,
} from "./Cart.styled";
import BackLink from "../../components/BackLink";

const CartPage = ({ cart, updateProductQuantity }) => {
  return (
    <CartContainer>
      {cart && cart?.length !== 0 && <Breadcrumbs />}

      <StyledHeading>
        <h1>Cart</h1>
        <BackLink>Continue Shopping</BackLink>
      </StyledHeading>
      {cart && cart?.length !== 0 ? (
        <>
          <ul>
            {cart.map((product) => (
              <ProductContainer key={product.id}>
                <ImageContainer>
                  <img src={product.imageUrl} alt={product.title} />
                </ImageContainer>

                <HeadingContainer>
                  <h2>
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </h2>
                </HeadingContainer>
                <TextContainer>
                  <p>
                    Price: <b>${product.discountedPrice}</b>
                  </p>
                  {product.price - product.discountedPrice !== 0 && (
                    <p>
                      Discount:{" "}
                      <b>
                        ${(product.price - product.discountedPrice).toFixed(2)}
                      </b>
                    </p>
                  )}
                  {product.quantity > 0 && (
                    <p>
                      Total Price for this Item:{" "}
                      <b>
                        $
                        {(product.quantity * product.discountedPrice).toFixed(
                          2
                        )}
                      </b>
                    </p>
                  )}
                </TextContainer>

                <CartControls>
                  <Link to={`/product/${product.id}`}>
                    <Button>View Product</Button>
                  </Link>
                  <Quantity>
                    <p>
                      Quantity: <b>{product.quantity}</b>
                    </p>
                    <div>
                      <Button
                        onClick={() =>
                          updateProductQuantity(
                            product.id,
                            product.quantity - 1
                          )
                        }
                      >
                        -
                      </Button>
                      <Button
                        onClick={() =>
                          updateProductQuantity(
                            product.id,
                            product.quantity + 1
                          )
                        }
                      >
                        +
                      </Button>
                    </div>
                  </Quantity>
                </CartControls>
              </ProductContainer>
            ))}
          </ul>
          <StyledDiv>
            <h3>Total Price: ${getTotalPrice(cart)}</h3>
            <p>Shipping calculated at checkout</p>
            <Link to="/checkout">
              <Button $proceed>Proceed to Checkout</Button>
            </Link>
          </StyledDiv>
        </>
      ) : (
        <h2>Your cart is empty.</h2>
      )}
    </CartContainer>
  );
};

export default CartPage;
