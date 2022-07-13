const totalPrice = (cart) =>
  cart.reduce((acc, curr) => acc + curr.discountedPrice * curr.qty, 0);

const originalPrice = (cart) =>
  cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

export { totalPrice, originalPrice };
