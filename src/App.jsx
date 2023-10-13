import { CartProvider } from "./contexts/CartContext";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import Layout from "./components/Layout";
import CartPage from "./pages/CartPage";
import SalesPage from "./pages/SalesPage/SalesPage";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout">
            <Route index element={<CheckoutPage />} />
            <Route path="success" element={<CheckoutSuccessPage />} />
          </Route>
          <Route path="sale" element={<SalesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
