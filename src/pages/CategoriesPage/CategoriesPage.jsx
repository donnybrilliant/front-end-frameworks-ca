import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import ProductList from "../../components/ProductList";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";
import Categories from "../../components/Categories";
import { CategoriesContainer } from "./CategoriesPage.styled";

const CategoriesPage = () => {
  // Get the category from the URL
  let { category } = useParams();
  // Use navigate to change the URL
  const navigate = useNavigate();
  // Use the category from the URL to set the initial selected categories
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const initialCategories = category ? category.split("+") : [];
    return initialCategories;
  });
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  // Handle clicking a category toggle
  const handleCategoryClick = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      // If the category is already selected, remove it from the array
      const newSelectedCategories = category
        ? prevSelectedCategories.includes(category)
          ? // If the category is not already selected, add it to the array
            prevSelectedCategories.filter((cat) => cat !== category)
          : // If the category is not already selected, add it to the array
            [...prevSelectedCategories, category]
        : // If no category is passed, clear the array
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

  if (isLoading) return <Loader />;
  if (isError) return <Error>Error Loading Products</Error>;

  // Get unique categories from the products
  const categories = Array.from(
    new Set(data.flatMap((product) => product.tags))
  );

  // Filter the products based on the selected categories
  const filteredProducts = data.filter((product) =>
    selectedCategories.length === 0
      ? true
      : selectedCategories.some((category) => product.tags.includes(category))
  );

  return (
    data && (
      <CategoriesContainer>
        <Categories
          categories={categories}
          selectedCategories={selectedCategories}
          handleCategoryClick={handleCategoryClick}
        />
        <ProductList products={filteredProducts} />
      </CategoriesContainer>
    )
  );
};

export default CategoriesPage;
