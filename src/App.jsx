import { CartProvider } from "./contexts/CartContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Layout from "./components/Layout";
import CartPage from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout">
            <Route index element={<Checkout />} />
            <Route path="success" element={<CheckoutSuccess />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
