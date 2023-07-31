import { createContext, useState, useReducer } from "react";

const WishlistContext=createContext();

const wishlistReducer = (state, action) => {
    
    const { id } = action.payload;
    let updatedWishlist;
    switch (action.type) {
      case "ADD_ITEM":
        const existingProductIndex = state.findIndex(
          (product) => product.id === id
        );
        if (existingProductIndex !== -1) {
          updatedWishlist = state.map((product, index) =>
            index === existingProductIndex
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
        } else {
          updatedWishlist = [...state, { ...action.payload, quantity: 1 }];
        }
        return updatedWishlist;
      case "REMOVE_ITEM":
        updatedWishlist = state.filter((product) => product.id.current !== id.current);
        return updatedWishlist;
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
  ];

const WishlistContextProvider=({children})=>{

const[wishlistData, dispatch]=useReducer(wishlistReducer,initialState);
const[showWishlist, setShowWishlist]=useState(false);
const[isWishlisted, setIsWishlisted]=useState(false);

const handleShowWishlist=()=>{
    setShowWishlist(!showWishlist);
}

// const isProductInWishlist=(product)=>{
//     console.log('product', product.id.current)
//     const id =product.id;
//     console.log('id',id)
//     const exists = wishlistData.findIndex((product) => {
//         return product.id === id});
//     if(exists!==-1){
//         return true;
//     }
//     return false;
// }
    return(
        <WishlistContext.Provider value={{showWishlist, handleShowWishlist, wishlistData, dispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}
export {WishlistContext, WishlistContextProvider};