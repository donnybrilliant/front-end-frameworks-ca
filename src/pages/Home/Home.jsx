import useApi from "../../hooks/useApi";
import { useState } from "react";
import ProductList from "../../components/ProductList";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Search from "../../components/Search/Search";
import { HomeContainer } from "./Home.styled";

const Home = () => {
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const filteredProducts = data.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.includes(searchQuery.toLowerCase()))
  );

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Products</Error>;

  return (
    <HomeContainer>
      <Search onSearch={handleSearch} />
      {data && <ProductList products={filteredProducts} />}
    </HomeContainer>
  );
};

export default Home;
