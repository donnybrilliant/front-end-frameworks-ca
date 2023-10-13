import CartItem from "../CartItem";

// Component that lists all the products in the Cart
const CartItemList = ({ cart }) => {
  return (
    <ul>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default CartItemList;
