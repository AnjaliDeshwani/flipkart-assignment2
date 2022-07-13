import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";
import data from "../db/products.json";
import { ACTION_TYPE } from "../utils/constants";

const ProductContext = createContext();

const { products } = data;

const initialState = {
  products: [],
  cart: [],
  saveLater: [],
};

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );

  useEffect(() => {
    productDispatch({
      type: ACTION_TYPE.INITIAL_PRODUCTS,
      payload: { products },
    });
  }, []);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
