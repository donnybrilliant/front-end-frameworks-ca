import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import {
  ProductContainer,
  ImageContainer,
  HeadingContainer,
  TextContainer,
  CartControls,
  Quantity,
} from "./CartItem.styled";

const CartItem = ({ product }) => {
  const { updateProductQuantity } = useCart();
  return (
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
            <b>${(product.price - product.discountedPrice).toFixed(2)}</b>
          </p>
        )}
        {product.quantity > 0 && (
          <p>
            Total Price for this Item:{" "}
            <b>${(product.quantity * product.discountedPrice).toFixed(2)}</b>
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
          </div>
        </Quantity>
      </CartControls>
    </ProductContainer>
  );
};

export default CartItem;
