import Button from "../Button";
import {
  ProductContainer,
  Container,
  AddToCart,
  Tags,
  Reviews,
} from "./SingleProduct.styled";
import Rating from "../Rating";

function isOnSale(product) {
  if (product.discountedPrice < product.price) {
    return true;
  }
}

const SingleProduct = ({ product }) => {
  return (
    <>
      {/* Is another check better here? */}
      {product.title ? (
        <ProductContainer>
          <div>
            <h1>{product.title}</h1>
            {isOnSale(product) && <span>ON SALE</span>}
          </div>
          <Container>
            {/* Render the ratings */}
            <Rating rating={product.rating} />
            {/* Render the tags */}
            <Tags>
              <h4>Tags:</h4>
              {product.tags?.length ? (
                <div>
                  {product.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              ) : (
                <p>No tags</p>
              )}
            </Tags>
          </Container>
          <h2>Description:</h2>
          <p>{product.description}</p>
          <AddToCart>
            <h3>Price: ${product.discountedPrice}</h3>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </AddToCart>
          <img src={product.imageUrl} alt={product.title} />

          {/* Render the reviews */}
          <Reviews>
            <h5>Reviews:</h5>
            {product.reviews?.length ? (
              <ul>
                {product.reviews.map((review) => (
                  <li key={review.id}>
                    <p>
                      <b>Username:</b> {review.username}
                    </p>
                    <p>
                      <b>Rating:</b> {review.rating}
                    </p>
                    <p>
                      <b>Description:</b> {review.description}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}
          </Reviews>
        </ProductContainer>
      ) : (
        <h1>Product not found.</h1>
      )}
    </>
  );
};

export default SingleProduct;
