import { Link } from "react-router-dom";
import { useProduct } from "../../context/product-context";
import { ACTION_TYPE } from "../../utils/constants";
export const ProductCard = ({ product }) => {
  const { img, brandName, size, price, discountedPrice } = product;

  const {
    productState: { cart },
    productDispatch,
  } = useProduct();

  const addCartHandler = () => {
    productDispatch({
      type: ACTION_TYPE.ADD_TO_CART,
      payload: { product: { ...product, qty: 1 } },
    });
  };

  const inCart = cart.find((cartProduct) => cartProduct._id === product._id);

  return (
    <div className="w-72 flex flex-col gap-1 shadow-md">
      <img src={img} alt="product" className="h-96"></img>
      <div className="flex flex-col px-2">
        <span className="text-gray-500 font-semibold">{brandName}</span>
        <span className="text-sm">Casual Regular Sleeves T-shirts</span>
      </div>
      <div className="flex gap-3 px-2">
        <span className="font-bold">₹{discountedPrice}</span>
        <span className="line-through text-gray-500 ">₹{price}</span>
      </div>
      <div className="flex gap-2 px-2">
        <span>Size</span>
        {size.map((s) => (
          <span>{s},</span>
        ))}
      </div>
      {inCart ? (
        <Link
          to="/cart"
          className="bg-[#fb641b] uppercase font-bold text-white p-2 text-center"
        >
          Already in Cart
        </Link>
      ) : (
        <button
          className="bg-[#fb641b] uppercase font-bold text-white p-2"
          onClick={addCartHandler}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};
