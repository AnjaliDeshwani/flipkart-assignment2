export const PriceDetails = () => {
  return (
    <div className="w-[30%] border-2 border-gray-300 shadow-md flex flex-col">
      <div className="h-11 flex items-center p-2">
        <span className="font-bold uppercase text-gray-500">Price Deatils</span>
      </div>
      <div className="border-b-2 border-b-gray-300"></div>
      <div className="grow p-2 flex flex-col gap-3">
        <div className="flex justify-between">
          <span>Price (2 items)</span>
          <span>₹1,295</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>− ₹270</span>
        </div>
      </div>
      <div className="border-b-2 border-b-gray-300"></div>
      <div className="flex justify-between font-bold p-2">
        <span>Total Amount</span>
        <span>₹953</span>
      </div>
    </div>
  );
};
