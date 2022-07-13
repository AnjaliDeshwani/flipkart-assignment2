import { PriceDetails } from "./PriceDeatils";
export const Cart = () => {
  return (
    <div className="mt-20 flex w-[80%] m-auto justify-between">
      <div className="w-[55%] border-2 border-gray-300 shadow-md flex flex-col">
        <div className="h-11 flex items-center p-2">
          <span className="font-bold">My Cart</span>
        </div>
        <div className="border-b-2 border-b-gray-300"></div>
        <div className="mt-3 p-4">
          <div className="flex flex-col mt-1">
            <div className="flex gap-8">
              <img
                src="https://rukminim1.flixcart.com/image/580/696/l30hmkw0/top/n/0/k/s-00596838-forever-21-original-image89czjyra6vk.jpeg?q=50"
                alt="product"
                className="w-32"
              ></img>

              <div className="flex flex-col gap-2">
                <span>DMP FASHION Casual Regular Sleeves T-shirts</span>
                <div>
                  <span className="font-semibold">Size:</span> <span>S</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold">₹359</span>
                  <span className="line-through text-gray-500 ">₹1,499</span>
                </div>
              </div>
            </div>
            <div className="flex gap-8 mt-2">
              <div className="w-32 flex gap-2 items-center">
                <span className="rounded-full border-2 w-6 h-6 border-gray-300 flex items-center justify-center cursor-pointer">
                  <span>-</span>
                </span>
                <span className="rounded border-2 w-10 h-min border-gray-300 text-center flex items-center justify-center">
                  <span>3</span>
                </span>
                <span className="rounded-full border-2 w-6 h-6 border-gray-300 text-center flex items-center justify-center cursor-pointer">
                  <span>+</span>
                </span>
              </div>
              <div className="flex gap-8">
                <button className="font-bold uppercase">Save for later</button>
                <button className="font-bold uppercase">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PriceDetails />
    </div>
  );
};
