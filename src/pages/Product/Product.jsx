import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import SingleProduct from "../../components/SingleProduct";
import Loader from "../../components/Loader";

const Product = ({ addToCart }) => {
  let { id } = useParams();
  const { data, isLoading, isError } = useApi(
    `https://api.noroff.dev/api/v1/online-shop/${id}`
  );

  if (isLoading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <h1>Error loading data</h1>
      </main>
    );
  }

  return (
    <main>
      {data && <SingleProduct product={data} addToCart={addToCart} />}
    </main>
  );
};

export default Product;
