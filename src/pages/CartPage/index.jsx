import useCart from "../../hooks/useCart";
import Cart from "../../components/Cart";

// Page to display the Cart
const CartPage = () => {
  document.title = "Cart | Shop";
  const { cart, clearCart } = useCart();
  return <Cart cart={cart} clearCart={clearCart} />;
};

export default CartPage;
