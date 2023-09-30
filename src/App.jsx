import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Layout from "./components/Layout";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [cart, setCart, clearCart] = useLocalStorage("cart", []);

  const addToCart = (product) => {
    setCart((currentCart) => {
      // If the cart is not yet defined, create it with the new product
      if (!currentCart) {
        return [{ ...product, quantity: 1 }];
      }

      const productInCart = currentCart.find((item) => item.id === product.id);

      if (productInCart) {
        // Product is already in the cart, increase quantity
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Product is not in the cart, add it with a quantity of 1
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateProductQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity < 1) {
        // Filter out the item with the specified productId
        return prevCart.filter((item) => item.id !== productId);
      } else {
        // map through the cart items. For each item, if the id matches the one to update,
        // replace the quantity with the new quantity. Otherwise, leave the item unchanged
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        );
      }
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout cart={cart} />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="product/:id"
            element={<Product cart={cart} addToCart={addToCart} />}
          />
          <Route
            path="cart"
            element={
              <Cart cart={cart} updateProductQuantity={updateProductQuantity} />
            }
          />
          <Route path="checkout">
            <Route index element={<Checkout cart={cart} />} />
            <Route
              path="success"
              element={<CheckoutSuccess clearCart={clearCart} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
