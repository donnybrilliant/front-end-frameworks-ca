import useApi from "../../hooks/useApi";
import ProductList from "../../components/ProductList";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Home = () => {
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Products</Error>;

  return <>{data && <ProductList products={data} />}</>;
};

export default Home;
