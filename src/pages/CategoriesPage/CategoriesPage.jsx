import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import ProductList from "../../components/ProductList";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";
import Categories from "../../components/Categories"; // Import the Categories component
import { CategoriesContainer } from "./CategoriesPage.styled";

// Page to display the Categories Page
const CategoriesPage = () => {
  // Get the category from the url
  let { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  // Set the document title based on the category
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

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Products</Error>;

  // Get unique categories from the data.tags array
  const categories = Array.from(
    new Set(data.flatMap((product) => product.tags))
  );

  // Filter the products based on the selected category
  const filteredProducts = data.filter((product) =>
    selectedCategory === "" ? true : product.tags.includes(selectedCategory)
  );

  return (
    data && (
      <CategoriesContainer>
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          filteredProducts={filteredProducts}
        />
        <ProductList products={filteredProducts} />
      </CategoriesContainer>
    )
  );
};

export default CategoriesPage;
