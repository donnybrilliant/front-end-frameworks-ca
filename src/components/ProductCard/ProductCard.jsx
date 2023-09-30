import { Link } from "react-router-dom";
import Button from "../Button";
import { ProductContainer, StyledDiv } from "./ProductCard.styled";

function isOnSale(product) {
  if (product.discountedPrice < product.price) {
    return true;
  }
}
const ProductCard = ({ product }) => {
  return (
    <ProductContainer key={product.id}>
      <div>
        <h2>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h2>
        {isOnSale(product) && <span>ON SALE</span>}
      </div>

      <img src={product.imageUrl} alt={product.title} />
      {/* Render the ratings */}
      {isOnSale(product) && <s>${product.price}</s>}
      <StyledDiv>
        <p>
          <b>${product.discountedPrice}</b>
        </p>

        <Link to={`/product/${product.id}`}>
          <Button>View Product</Button>
        </Link>
      </StyledDiv>
    </ProductContainer>
  );
};

export default ProductCard;
