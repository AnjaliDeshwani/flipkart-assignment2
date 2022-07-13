import { useProduct } from "../../context/product-context";
import { ACTION_TYPE } from "../../utils/constants";

export const CartProduct = ({ product }) => {
  const { productDispatch } = useProduct();
  const { img, brandName, price, discountedPrice, qty } = product;

  const removeHandler = () => {
    productDispatch({
      type: ACTION_TYPE.REMOVE_FROM_CART,
      payload: { product },
    });
  };
  const decrementHandler = () => {
    productDispatch({
      type: ACTION_TYPE.DEC_QTY,
      payload: { product },
    });
  };
  const incrementHandler = () => {
    productDispatch({
      type: ACTION_TYPE.INC_QTY,
      payload: { product },
    });
  };

  const addSaveLater = () => {
    productDispatch({
      type: ACTION_TYPE.ADD_SAVE_LATER,
      payload: { product },
    });
    productDispatch({
      type: ACTION_TYPE.REMOVE_FROM_CART,
      payload: { product },
    });
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex gap-8 ">
        <img src={img} alt="product" className="w-32"></img>

        <div className="flex flex-col gap-2">
          <span>{brandName} Casual Regular Sleeves T-shirts</span>
          <div>
            <span className="font-semibold">Size:</span> <span>S</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">₹{discountedPrice}</span>
            <span className="line-through text-gray-500 ">₹{price}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-32 flex gap-2 items-center justify-center">
          <span className="rounded-full border-2 w-6 h-6 border-gray-300 flex items-center justify-center">
            <button
              className={`${qty === 1 && "text-gray-400"}`}
              onClick={decrementHandler}
              disabled={qty === 1}
            >
              -
            </button>
          </span>
          <span className="rounded border-2 w-10 h-min border-gray-300 text-center flex items-center justify-center">
            <span>{qty}</span>
          </span>
          <span className="rounded-full border-2 w-6 h-6 border-gray-300 text-center flex items-center justify-center">
            <button onClick={incrementHandler}>+</button>
          </span>
        </div>
        <div className="flex gap-8">
          <button className="font-bold uppercase" onClick={addSaveLater}>
            Save for later
          </button>
          <button className="font-bold uppercase" onClick={removeHandler}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
