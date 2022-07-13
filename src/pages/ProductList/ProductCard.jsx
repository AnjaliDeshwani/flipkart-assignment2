export const ProductCard = () => {
  return (
    <div className="w-72 h-full flex flex-col gap-1 shadow-md">
      <img
        src="https://rukminim1.flixcart.com/image/580/696/l30hmkw0/top/n/0/k/s-00596838-forever-21-original-image89czjyra6vk.jpeg?q=50"
        alt="product"
      ></img>
      <div className="flex flex-col px-2">
        <span className="text-gray-500 font-semibold">DMP FASHION</span>
        <span className="text-sm">Casual Regular Sleeves T-shirts</span>
      </div>
      <div className="flex gap-3 px-2">
        <span className="font-bold">₹359</span>
        <span className="line-through text-gray-500 ">₹1,499</span>
      </div>
      <div className="flex gap-2 px-2">
        <span>Size</span>
        <span>S, M, L, XL, XXL, 3XL</span>
      </div>
      <button className="bg-[#fb641b] uppercase font-bold text-white p-2">
        Add to cart
      </button>
    </div>
  );
};
