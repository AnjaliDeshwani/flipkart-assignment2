import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="bg-[#2874f0] h-16 text-white fixed top-0 w-full">
      <div className="w-[80%] m-auto flex items-center gap-11 p-2">
        <Link to="/" className="italic">
          <h3 className="font-bold text-xl">Flipkart</h3>
          <span>Explore Plus</span>
        </Link>
        <div className="grow">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full h-10 p-2 outline-none text-black"
          />
        </div>
        <Link to="/cart" className="font-semibold text-lg">
          Cart
        </Link>
      </div>
    </div>
  );
};
