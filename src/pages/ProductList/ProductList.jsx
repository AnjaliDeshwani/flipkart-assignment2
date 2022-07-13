import { ProductCard } from "./ProductCard";
import { useProduct } from "../../context/product-context";

export const ProductList = () => {
  const {
    productState: { products },
  } = useProduct();
  return (
    <div className="my-20 w-[90%] mx-auto">
      <div className="grid grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
