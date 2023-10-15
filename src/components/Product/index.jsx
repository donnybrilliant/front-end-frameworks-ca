import useCart from "../../hooks/useCart";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Rating from "../ui/Rating";
import NotFound from "../../pages/NotFoundPage";
import { isOnSale } from "../../utils";
import ButtonLink from "../ui/ButtonLink";
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
} from "./styled";

// Component to display a single product and handle the add to cart functionality
const Product = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Function to handle the add to cart functionality
  const handleAddToCart = (product) => {
    addToCart(product);
    setIsAdded(true);
  };
  return (
    <>
      {product && Object.keys(product).length > 0 ? (
        <ProductContainer>
          <Info>
            <Heading>
              <h1>{product.title}</h1>
              {isOnSale(product) && <Link to="/sale">ON SALE</Link>}
            </Heading>
            <RatingsAndTags>
              <Rating rating={product.rating} />

              <Tags>
                <h4>Tags:</h4>
                {product.tags?.length ? (
                  <div>
                    {product.tags.map((tag) => (
                      <ButtonLink key={tag} to={`/categories/${tag}`}>
                        {tag}
                      </ButtonLink>
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

              {isOnSale(product) && (
                <div>
                  <p>Previous price was ${product.price}</p>
                  <p>
                    Discount:{" "}
                    <b>
                      -${(product.price - product.discountedPrice).toFixed(2)}
                    </b>
                  </p>
                </div>
              )}
            </Description>
            <AddToCart>
              <h3>Price: ${product.discountedPrice}</h3>
              <Button
                $proceed
                onClick={() => handleAddToCart(product)}
                added={isAdded}
              >
                {isAdded ? "Added" : "Add to Cart"}
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

export default Product;
