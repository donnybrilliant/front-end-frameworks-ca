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

const Categories = ({
  categories,
  selectedCategories,
  handleCategoryClick,
}) => {
  // Reference to the categories list element
  const categoriesRef = useRef(null);

  // Sort the categories alphabetically
  const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b));

  // Handle scrolling the categories list
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
          className={selectedCategories.length === 0 ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleCategoryClick(""); // This clears the selected categories
          }}
        >
          ALL
        </StyledLink>
        {sortedCategories.map((tag) => (
          <StyledLink
            key={tag}
            to={`/categories/${tag}`}
            className={selectedCategories.includes(tag) ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick(tag);
            }}
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
