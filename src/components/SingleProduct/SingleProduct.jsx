import Button from "../Button";
import {
  ProductContainer,
  AddToCart,
  Tags,
  Reviews,
  Info,
  ImageContainer,
  Heading,
  RatingsAndTags,
  Description,
} from "./SingleProduct.styled";
import Rating from "../Rating";
import NotFound from "../../pages/NotFound";

import { isOnSale } from "../../utils";

const SingleProduct = ({ product, addToCart }) => {
  return (
    <>
      {/* Is another check better here? */}
      {product.title ? (
        <ProductContainer>
          <Info>
            <Heading>
              <h1>{product.title}</h1>
              {isOnSale(product) && <span>ON SALE</span>}
            </Heading>
            <RatingsAndTags>
              <Rating rating={product.rating} />

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
            </RatingsAndTags>
            <Description>
              <h2>Description:</h2>
              <p>{product.description}</p>

              {isOnSale(product) && <p>Previous price was ${product.price}</p>}
            </Description>
            <AddToCart>
              <h3>Price: ${product.discountedPrice}</h3>
              <Button $proceed onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </AddToCart>
            <Reviews>
              <h5>Reviews:</h5>
              {product.reviews?.length ? (
                <ul>
                  {product.reviews.map((review) => (
                    <li key={review.id}>
                      <p>
                        <b>Username:</b> {review.username}
                      </p>
                      <div>
                        <b>Rating:</b> <Rating rating={review.rating} />
                      </div>
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
          </Info>
          <ImageContainer>
            <img src={product.imageUrl} alt={product.title} />
          </ImageContainer>
        </ProductContainer>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default SingleProduct;
