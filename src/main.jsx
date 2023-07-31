import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext.jsx'
import { WishlistContextProvider } from './context/wishlistContext.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
import { DashboardContextProvider } from './context/dashboardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <DashboardContextProvider>
    <WishlistContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </WishlistContextProvider>
    </DashboardContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
