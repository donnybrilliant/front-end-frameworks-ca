import CartItem from "../CartItem/CartItem";

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
