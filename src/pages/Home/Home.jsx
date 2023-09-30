import React from "react";
import useApi from "../../hooks/useApi";
import ProductList from "../../components/ProductList";

const Home = () => {
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  return (
    <main>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error loading data</div>}
      {data && <ProductList products={data} />}
    </main>
  );
};

export default Home;
