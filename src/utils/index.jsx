export const getTotalPrice = (cart) => {
  return cart
    .reduce(
      (total, product) => total + product.quantity * product.discountedPrice,
      0
    )
    .toFixed(2);
};

export const isOnSale = (product) => {
  if (product.discountedPrice < product.price) {
    return true;
  }
};
