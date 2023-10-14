import useApi from "../../hooks/useApi";
import ProductList from "../../components/ProductList";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";
import Search from "../../components/Search/Search";
import { HomeContainer } from "./HomePage.styled";
import useSearch from "../../hooks/useSearch";

// Page to display the Home Page
const HomePage = () => {
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  // Get the products and handleSearch function from the useSearch hook
  const { products, handleSearch } = useSearch(data);

  document.title = "Shop";

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Products</Error>;

  return (
    <HomeContainer>
      <Search onSearch={handleSearch} products={products} />
      {data && <ProductList products={products} />}
    </HomeContainer>
  );
};

export default HomePage;
