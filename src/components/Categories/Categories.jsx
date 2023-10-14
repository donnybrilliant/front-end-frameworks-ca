import { useRef } from "react";
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
} from "./Categories.styled";

// Component to display the Categories
const Categories = ({ categories, selectedCategory }) => {
  // Create a ref to the categories list
  const categoriesRef = useRef(null);

  // Sort the categories alphabetically
  const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b));

  // Function to handle the scroll buttons
  const handleScroll = (direction) => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollLeft += direction * 100;
    }
  };

  return (
    <CategoriesContainer>
      <ScrollButton className="scroll-left" onClick={() => handleScroll(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </ScrollButton>
      <CategoriesList ref={categoriesRef}>
        <StyledLink
          to={`/categories/`}
          className={selectedCategory === "" ? "active" : ""}
        >
          ALL
        </StyledLink>
        {sortedCategories.map((tag) => (
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
    </CategoriesContainer>
  );
};

export default Categories;
