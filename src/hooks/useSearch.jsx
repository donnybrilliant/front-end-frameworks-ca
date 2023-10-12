import { useState, useEffect } from "react";

const useSearch = (initialProducts = []) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState(initialProducts);

  useEffect(() => {
    setAllProducts(initialProducts);
  }, [initialProducts]);

  const filteredProducts = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.includes(searchQuery.toLowerCase()))
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return {
    products: filteredProducts,
    handleSearch,
  };
};

export default useSearch;
