import { createContext, useState } from "react";

const WishlistContext=createContext();

const WishlistContextProvider=({children})=>{

const[showWishlist, setShowWishlist]=useState(false);

const handleShowWishlist=()=>{
    setShowWishlist(!showWishlist);
}
    return(
        <WishlistContext.Provider value={{showWishlist, handleShowWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}
export {WishlistContext, WishlistContextProvider};