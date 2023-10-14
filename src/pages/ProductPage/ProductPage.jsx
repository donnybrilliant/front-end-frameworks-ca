import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Product from "../../components/Product";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";

// Page to display a single product
const ProductPage = () => {
  // Get the id from the url
  let { id } = useParams();

  const { data, isLoading, isError } = useApi(
    `https://api.noroff.dev/api/v1/online-shop/${id}`
  );

  document.title = `${data.title} | Shop`;

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Product</Error>;

  return <>{data && <Product product={data} />}</>;
};

export default ProductPage;
