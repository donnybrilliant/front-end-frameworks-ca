import React from "react";
import useApi from "../../hooks/useApi";
import ProductList from "../../components/ProductList";
import Loader from "../../components/Loader";

const Home = () => {
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
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
  return <main>{data && <ProductList products={data} />}</main>;
};

export default Home;
