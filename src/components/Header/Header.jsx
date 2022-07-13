import { Link } from "react-router-dom";
import { useProduct } from "../../context/product-context";
export const Header = () => {
  const {
    productState: { cart },
  } = useProduct();

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
        <Link to="/cart" className=" relative">
          <span className="text-lg font-semibold">Cart</span>
          {cart.length > 0 && (
            <span className="absolute top-0 left-9 w-5 h-5 rounded-full bg-black flex items-center justify-center">
              <span className="text-xs">{cart.length}</span>
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};
