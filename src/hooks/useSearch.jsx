import { useState, useEffect } from "react";

// Custom React hook to filter products by search query
const useSearch = (initialProducts = []) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState(initialProducts);

  // Reset the products when the initial products change
  useEffect(() => {
    setAllProducts(initialProducts);
  }, [initialProducts]);

  // Filter the products based on the search query
  const filteredProducts = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.includes(searchQuery.toLowerCase()))
  );

  // Function to update the search query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Return the filtered products and search handler
  return {
    products: filteredProducts,
    handleSearch,
  };
};

export default useSearch;
