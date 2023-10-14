import useApi from "../../hooks/useApi";
import useCategorySelection from "../../hooks/useCategories";
import Container from "../../components/ui/Container";
import Categories from "../../components/Categories";
import ProductList from "../../components/ProductList";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";

const CategoriesPage = () => {
  document.title = "Categories | Shop";
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
      <Container $width={"1400px"}>
        <Categories
          categories={categories}
          selectedCategories={selectedCategories}
          handleCategoryClick={handleCategoryClick}
        />
        <ProductList products={filteredProducts} />
      </Container>
    )
  );
};

export default CategoriesPage;
