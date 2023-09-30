import ProductCard from "../ProductCard";
import { MainGrid } from "./ProductList.styled";

const ProductList = ({ products }) => {
  return (
    <MainGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </MainGrid>
  );
};

export default ProductList;
