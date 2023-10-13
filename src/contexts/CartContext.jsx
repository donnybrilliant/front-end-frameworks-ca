import { createContext, useReducer, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Define initial cart state
const initialCartState = [];

// Create a CartContext
const CartContext = createContext();

// Define the cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CART":
      // Initialize the cart with data from localStorage
      return action.payload;
    case "ADD_TO_CART":
      // Add a product to the cart
      return addToCart(state, action.payload);
    case "INCREASE_QUANTITY":
      // Increase the quantity of a product in the cart
      return increaseProductQuantity(state, action.payload);
    case "DECREASE_QUANTITY":
      // Decrease the quantity of a product in the cart
      return decreaseProductQuantity(state, action.payload);
    case "CLEAR_CART":
      // Clear the cart
      return [];
    default:
      return state;
  }
};

// Function to add a product to the cart
const addToCart = (cart, product) => {
  const productInCart = cart.find((item) => item.id === product.id);

  if (productInCart) {
    // Product is already in the cart, increase quantity
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    // Product is not in the cart, add it with a quantity of 1
    return [...cart, { ...product, quantity: 1 }];
  }
};

// Function to increase the quantity of a product in the cart
const increaseProductQuantity = (cart, productId) => {
  return cart.map((item) =>
    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
  );
};

// Function to decrease the quantity of a product in the cart
const decreaseProductQuantity = (cart, productId) => {
  return cart
    .map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0); // Filter out items with quantity 0
};

// Create a CartProvider
const CartProvider = ({ children }) => {
  // Use the useLocalStorage hook to persist cart data
  const [storedCart, setStoredCart] = useLocalStorage("cart", initialCartState);

  // Initialize cart state using useReducer
  const [cart, dispatch] = useReducer(cartReducer, storedCart);

  // Use useEffect to update localStorage whenever the cart changes
  useEffect(() => {
    setStoredCart(cart);
  }, [cart, setStoredCart]);

  // Provide the cart state and actions to child components
  const contextValue = {
    cart,
    addToCart: (product) => dispatch({ type: "ADD_TO_CART", payload: product }),
    increaseProductQuantity: (productId) =>
      dispatch({ type: "INCREASE_QUANTITY", payload: productId }),
    decreaseProductQuantity: (productId) =>
      dispatch({ type: "DECREASE_QUANTITY", payload: productId }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
