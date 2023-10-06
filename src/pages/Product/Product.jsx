import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import SingleProduct from "../../components/SingleProduct";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Product = ({ addToCart }) => {
  let { id } = useParams();
  const { data, isLoading, isError } = useApi(
    `https://api.noroff.dev/api/v1/online-shop/${id}`
  );

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Products</Error>;

  return <>{data && <SingleProduct product={data} addToCart={addToCart} />}</>;
};

export default Product;
