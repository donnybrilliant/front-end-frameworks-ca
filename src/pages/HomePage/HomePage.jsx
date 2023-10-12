import useApi from "../../hooks/useApi";
import { useState } from "react";
import ProductList from "../../components/ProductList";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";
import Search from "../../components/Search/Search";
import { HomeContainer } from "./HomePage.styled";
import useSearch from "../../hooks/useSearch";

const HomePage = () => {
  const { products, handleSearch } = useSearch(data);

  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Products</Error>;

  document.title = "Shop";

  return (
    <HomeContainer>
      <Search onSearch={handleSearch} products={products} />

      {data && <ProductList products={products} />}
    </HomeContainer>
  );
};

export default HomePage;
