import { useState } from "react";

const useSearch = (initialProducts = []) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(initialProducts);

  useState(() => {
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) => tag.includes(searchQuery.toLowerCase()))
    );
    setProducts(filteredProducts);
  }, [searchQuery, products]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return {
    products,
    handleSearch,
  };
};

export default useSearch;
