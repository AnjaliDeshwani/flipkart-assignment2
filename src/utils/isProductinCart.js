export const isProductinCart = (product, cart) =>
  cart.find((cartProduct) => (cartProduct._id === product ? true : false));
