import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext.jsx'
import { WishlistContextProvider } from './context/wishlistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <WishlistContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </WishlistContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
