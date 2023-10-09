import { Link } from "react-router-dom";
import Button from "../Button";
import Rating from "../Rating";
import { isOnSale } from "../../utils";
import {
  ProductContainer,
  PriceAndButton,
  Heading,
} from "./ProductCard.styled";

const ProductCard = ({ product }) => {
  return (
    <ProductContainer key={product.id}>
      <Heading>
        <h2>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h2>
        {isOnSale(product) && <span>ON SALE</span>}
      </Heading>
      <img src={product.imageUrl} alt={product.title} />
      <Rating rating={product.rating} />
      {isOnSale(product) && <s>${product.price}</s>}
      <PriceAndButton>
        <p>${product.discountedPrice}</p>
        <Link to={`/product/${product.id}`}>
          <Button>View Product</Button>
        </Link>
      </PriceAndButton>
    </ProductContainer>
  );
};

export default ProductCard;
