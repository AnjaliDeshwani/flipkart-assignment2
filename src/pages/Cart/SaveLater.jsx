import { useProduct } from "../../context/product-context";
import { SaveLaterProduct } from "./SaveLaterProduct";

export const SaveLater = () => {
  const {
    productState: { saveLater },
  } = useProduct();

  return (
    <div className="border-2 border-gray-300 shadow-md flex flex-col">
      <div className="h-11 flex items-center p-2">
        <span className="font-bold">Save For Later ({saveLater.length})</span>
      </div>
      <div className="border-b-2 border-b-gray-300"></div>
      <div className="mt-3 p-4">
        {saveLater.map((product) => (
          <SaveLaterProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
