// Function to get the total price of the cart
export const getTotalPrice = (cart) => {
  return cart
    .reduce(
      (total, product) => total + product.quantity * product.discountedPrice,
      0
    )
    .toFixed(2);
};

// Function to check if the product is on sale
export const isOnSale = (product) => {
  if (product.discountedPrice < product.price) {
    return true;
  }
};

// Debounce function to limit the number of times a function is called
export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
