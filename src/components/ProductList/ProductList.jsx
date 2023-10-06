import ProductCard from "../ProductCard";
import { ProductGrid } from "./ProductList.styled";

const ProductList = ({ products }) => {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
};

export default ProductList;
