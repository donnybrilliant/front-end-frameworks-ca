import useCart from "../../hooks/useCart";
import Cart from "../../components/Cart";

const CartPage = () => {
  const { cart } = useCart();
  return <Cart cart={cart} />;
};

export default CartPage;
