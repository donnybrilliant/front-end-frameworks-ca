import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import ProductList from "../../components/ProductList";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  CategoriesContainer,
  StyledLink,
  CategoriesList,
  ScrollButton,
} from "./CategoriesPage.styled";

const CategoriesPage = () => {
  let { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const categoriesRef = useRef(null);
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      const title = category.charAt(0).toUpperCase() + category.slice(1);
      document.title = `${title} | Shop`;
    } else {
      setSelectedCategory("");
      document.title = "Categories | Shop";
    }
  }, [category]);

  useEffect(() => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollLeft = 0;
    }
  }, [selectedCategory]);

  const handleScroll = (direction) => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollLeft += direction * 100; // Adjust the scroll amount as needed
    }
  };

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Products</Error>;

  const categories = Array.from(
    new Set(data.flatMap((product) => product.tags))
  );

  const filteredProducts = data.filter((product) =>
    selectedCategory === "" ? true : product.tags.includes(selectedCategory)
  );

  return (
    <CategoriesContainer>
      <div>
        <ScrollButton className="scroll-left" onClick={() => handleScroll(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </ScrollButton>
        <CategoriesList ref={categoriesRef}>
          {categories.map((tag) => (
            <StyledLink
              key={tag}
              to={`/categories/${tag}`}
              className={selectedCategory === tag ? "active" : ""}
            >
              {tag}
            </StyledLink>
          ))}
        </CategoriesList>
        <ScrollButton className="scroll-right" onClick={() => handleScroll(1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </ScrollButton>
      </div>
      {data && <ProductList products={filteredProducts} />}
    </CategoriesContainer>
  );
};

export default CategoriesPage;
