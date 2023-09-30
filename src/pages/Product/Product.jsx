import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import SingleProduct from "../../components/SingleProduct";

const Product = () => {
  let { id } = useParams();
  const { data, isLoading, isError } = useApi(
    `https://api.noroff.dev/api/v1/online-shop/${id}`
  );
  return (
    <main>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error loading data</div>}
      {data && <SingleProduct product={data} />}
    </main>
  );
};

export default Product;
