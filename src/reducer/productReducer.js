import { ACTION_TYPE } from "../utils/constants";

export const productReducer = (productState, action) => {
  const { type, payload } = action;
  const { cart, saveLater } = productState;
  let updatedCart, updatedSaveLater;
  switch (type) {
    case ACTION_TYPE.INITIAL_PRODUCTS:
      return { ...productState, products: payload.products };

    case ACTION_TYPE.ADD_TO_CART:
      return { ...productState, cart: [...cart, payload.product] };

    case ACTION_TYPE.REMOVE_FROM_CART: {
      updatedCart = cart.filter((product) => product !== payload.product);
      return { ...productState, cart: updatedCart };
    }

    case ACTION_TYPE.INC_QTY: {
      updatedCart = cart.map((product) =>
        product === payload.product
          ? { ...product, qty: product.qty + 1 }
          : product
      );
      return { ...productState, cart: updatedCart };
    }

    case ACTION_TYPE.DEC_QTY: {
      updatedCart = cart.map((product) =>
        product === payload.product
          ? { ...product, qty: product.qty - 1 }
          : product
      );
      return { ...productState, cart: updatedCart };
    }

    case ACTION_TYPE.ADD_SAVE_LATER:
      return { ...productState, saveLater: [...saveLater, payload.product] };

    case ACTION_TYPE.REMOVE_SAVE_LATER: {
      updatedSaveLater = saveLater.filter(
        (product) => product !== payload.product
      );
      return { ...productState, saveLater: updatedSaveLater };
    }

    default:
      return productState;
  }
};
