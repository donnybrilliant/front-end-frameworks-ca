import ProductCard from "../ProductCard";
import { ProductGrid } from "./ProductList.styled";

const ProductList = ({ products, searchQuery }) => {
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.includes(searchQuery.toLowerCase()))
  );

  return (
    <ProductGrid>
      {filteredProducts.length === 0 ? (
        <h2>No products found</h2>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </ProductGrid>
  );
};

export default ProductList;
