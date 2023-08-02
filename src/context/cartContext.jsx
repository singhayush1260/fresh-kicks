import { createContext, useEffect, useReducer, useState } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  const { id } = action.payload;
  let updatedCart;
  switch (action.type) {
    case "DECREMENT_ITEM":
      updatedCart = state.map((product) => { 
        return product.id.current === id.current ? { ...product, quantity: Math.max(product.quantity - 1, 0) } : product}
      );
      return updatedCart.filter((product) => product.quantity >= 1);
    case "ADD_ITEM":
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
      return updatedCart;
    case "REMOVE_ITEM":
      updatedCart = state.filter((product) => product.id.current !== id.current);
      return updatedCart;
    default:
      return state;
  }
};

const initialState = [
  {
    id: {current: 1},
    brand: "Nike",
    title: "Air Force 1 Black",
    size: 3,
    price: 4422,
    quantity: 2,
  },
  {
    id: {current: 2},
    brand: "Puma",
    title: "ff fdf ev",
    size: 3,
    price: 3400,
    quantity: 3,
  },
];
const CartContextProvider = ({ children }) => {
  const [cartData, dispatch] = useReducer(cartReducer, initialState);
  const [totalPrice, setTotalPrice]=useState(0);
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const calculateTotalPrice=()=>{
   console.log(cartData);
   const total = cartData.reduce((acc, product)=>{
       acc = acc + ( product.price * product.quantity )
       return acc;
   },0)
   setTotalPrice(total)
  }

  useEffect(()=>{
    calculateTotalPrice();
  },[cartData])

  return (
    <CartContext.Provider value={{ handleShowCart, showCart, cartData, dispatch, totalPrice, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartContextProvider };
