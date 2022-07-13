import { ProductCard } from "./ProductCard";
export const ProductList = () => {
  return (
    <div className="mt-20 mx-4">
      <div className="grid grid-cols-4 gap-6">
        {[...Array(5)].map(() => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
};
