import useApi from "../../hooks/useApi";
import { isOnSale } from "../../utils";
import Container from "../../components/ui/Container";
import ProductList from "../../components/ProductList";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";

// Page to display the Home Page
const SalesPage = () => {
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Products</Error>;

  document.title = "Sale | Shop";

  // Use the filter method to create an array of products that are on sale
  const productsOnSale = data.filter((product) => isOnSale(product));

  return (
    <Container $width={"1400px"}>
      {data && <ProductList products={productsOnSale} />}
    </Container>
  );
};

export default SalesPage;
