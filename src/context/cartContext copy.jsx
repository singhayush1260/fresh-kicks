import { createContext, useReducer, useState } from "react";

const CartContext = createContext();

const manageCartReducer = (state, action) => {
  console.log("state", state);
  const { id } = action.payload;
  //console.log(action,id)
  let updatedCart;
  switch (action.type) {
    case "DECREMENT_ITEM":
      console.log("dec");
      updatedCart = state.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
          : product
      );
      return updatedCart.filter((product) => product.quantity >= 1);
    case "ADD_ITEM":
      console.log("add item", state);
      console.log(action.payload);
      const existingProductIndex = state.findIndex(
        (product) => product.id === id
      );
      if (existingProductIndex !== -1) {
        updatedCart = state.map((product, index) =>
          index === existingProductIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        updatedCart = [...state, { ...action.payload, quantity: 1 }];
      }
      console.log(updatedCart);
      return updatedCart;
    case "REMOVE_ITEM":
      console.log("remove item", state);
      updatedCart = state.filter(
        (product) => product.id !== id || product.quantity >= 1
      );
      console.log("aadssfsa", updatedCart);
      return updatedCart;
    default:
      return state;
  }
};

const initialState = [
  {
    id: 1,
    brand: "Nike",
    title: "Air Force 1 Black",
    size: 3,
    price: 4422,
    quantity: 2,
  },
];
const CartContextProvider = ({ children }) => {
  const [cartData, dispatch] = useReducer(manageCartReducer, initialState);
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <CartContext.Provider value={{ handleShowCart, showCart, cartData, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartContextProvider };
