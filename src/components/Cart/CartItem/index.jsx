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
} from "./styled";

// Component to display a single product in the Cart and handle the quantity
const CartItem = ({ product }) => {
  const { increaseProductQuantity, decreaseProductQuantity } = useCart();

  // Function to iincrease the quantity of a product in the cart
  const handleIncreaseQuantity = (productId) => {
    increaseProductQuantity(productId);
  };

  // Function to decrease the quantity of a product in the cart
  const handleDecreaseQuantity = (productId) => {
    decreaseProductQuantity(productId);
  };
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
            <Button onClick={() => handleDecreaseQuantity(product.id)}>
              -
            </Button>
            <Button onClick={() => handleIncreaseQuantity(product.id)}>
              +
            </Button>
          </div>
        </Quantity>
      </CartControls>
    </ProductContainer>
  );
};

export default CartItem;
