import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Custom hook to handle the categories
const useCategories = () => {
  // Get the category from the URL
  const { category } = useParams();
  // Get the navigate function from the router
  const navigate = useNavigate();
  // State to hold the selected categories (initially set to the category from the URL)
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const initialCategories = category ? category.split("+") : [];
    return initialCategories;
  });

  // Handle clicking a category
  const handleCategoryClick = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      const newSelectedCategories = category
        ? // If the category is already selected, remove it from the list
          prevSelectedCategories.includes(category)
          ? // If the category is not already selected, add it to the list
            prevSelectedCategories.filter((cat) => cat !== category)
          : // If no category is selected, set the category as the only selected category
            [...prevSelectedCategories, category]
        : // If no category is selected, clear the selected categories
          [];
      return newSelectedCategories;
    });
  };

  // Update the URL when the selected categories change
  useEffect(() => {
    const newUrl =
      selectedCategories.length > 0
        ? `/categories/${selectedCategories.join("+")}`
        : "/categories";
    navigate(newUrl);
  }, [selectedCategories, navigate]);

  return {
    selectedCategories,
    handleCategoryClick,
  };
};

export default useCategories;
