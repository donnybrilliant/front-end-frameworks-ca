import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import SingleProduct from "../../components/SingleProduct";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Product = () => {
  let { id } = useParams();
  const { data, isLoading, isError } = useApi(
    `https://api.noroff.dev/api/v1/online-shop/${id}`
  );

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Product</Error>;
  document.title = `${data.title} | Shop`;
  return <>{data && <SingleProduct product={data} />}</>;
};

export default Product;
