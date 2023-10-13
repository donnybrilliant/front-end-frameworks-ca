import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Create a CartContext
const CartContext = createContext();

// Create a CartProvider
const CartProvider = ({ children }) => {
  // Use the useLocalStorage hook to create a cart state
  const [cart, setCart, clearCart] = useLocalStorage("cart", []);

  // Function to add a product to the cart
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

  // Function to update the quantity of a product in the cart
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
    <CartContext.Provider
      value={{ cart, addToCart, updateProductQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
