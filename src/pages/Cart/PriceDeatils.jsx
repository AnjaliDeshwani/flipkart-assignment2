import { totalPrice, originalPrice } from "../../utils";
import { useProduct } from "../../context/product-context";

export const PriceDetails = () => {
  const {
    productState: { cart },
  } = useProduct();

  const totalAmount = totalPrice(cart);
  const price = originalPrice(cart);
  const discount = price - totalAmount;

  return (
    <div className="border-2 border-gray-300 shadow-md flex flex-col h-min">
      <div className="h-11 flex items-center p-2">
        <span className="font-bold uppercase text-gray-500">Price Deatils</span>
      </div>
      <div className="border-b-2 border-b-gray-300"></div>
      <div className="grow p-2 flex flex-col gap-3">
        <div className="flex justify-between">
          <span>Price ({cart.length} items)</span>
          <span>₹{price}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>− ₹{discount}</span>
        </div>
      </div>
      <div className="border-b-2 border-b-gray-300"></div>
      <div className="flex justify-between font-bold p-2">
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>
    </div>
  );
};
