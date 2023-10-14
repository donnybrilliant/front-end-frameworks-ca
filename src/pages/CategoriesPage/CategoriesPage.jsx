import useApi from "../../hooks/useApi";
import useCategorySelection from "../../hooks/useCategories";
import Categories from "../../components/Categories";
import ProductList from "../../components/ProductList";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";
import { CategoriesContainer } from "./CategoriesPage.styled";

const CategoriesPage = () => {
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );
  const { selectedCategories, handleCategoryClick } = useCategorySelection();

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
