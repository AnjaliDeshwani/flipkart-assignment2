import { PriceDetails } from "./PriceDeatils";
import { useProduct } from "../../context/product-context";
import { CartProduct } from "./CartProduct";
import { SaveLater } from "./SaveLater";

export const Cart = () => {
  const {
    productState: { cart, saveLater },
  } = useProduct();

  return (
    <div className="my-20 w-[80%] m-auto">
      <div className="flex flex-col gap-14">
        {cart.length ? (
          <div className="grid grid-cols-[2fr,1fr] gap-10 ">
            <div>
              <div className="border-2 border-gray-300 shadow-md flex flex-col">
                <div className="h-11 flex items-center p-2">
                  <span className="font-bold">My Cart ({cart.length})</span>
                </div>
                <div className="border-b-2 border-b-gray-300"></div>
                <div className="mt-3 p-4">
                  {cart.map((product) => (
                    <CartProduct key={product._id} product={product} />
                  ))}
                </div>
              </div>
            </div>

            <PriceDetails />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            Cart is Empty. Start Shopping.
          </div>
        )}
        {saveLater.length > 0 && <SaveLater />}
      </div>
    </div>
  );
};
