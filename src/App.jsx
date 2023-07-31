import "./App.scss";
import { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./pages/landing-page/LandingPage";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist";
import Dashboard from "./components/dashboard/Dashboard";

import Checkout from "./pages/checkout/Checkout";
import PaymentSuccessful from "./pages/payment-successful/PaymentSuccessful";
import ProductPage from "./pages/product-page/ProductPage";
import ProductDetailPage from "./pages/product-detail-page/ProductDetailPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";

import { AuthContext } from "./context/authContext";
import { CartContext } from "./context/cartContext";
import { WishlistContext } from "./context/wishlistContext";
import { DashboardContext } from "./context/dashboardContext";



const App = () => {
  const{showCart}=useContext(CartContext);
  const{showWishlist}=useContext(WishlistContext);
  const{showDashboard}=useContext(DashboardContext);
  const{authData:{user}}=useContext(AuthContext);
  const location=useLocation();
  const isCheckoutPage= location.pathname === '/checkout';


  return (
    <div>
      {showDashboard && user && <Dashboard name={user.Name} email={user.Email}/>}
      {!isCheckoutPage && <Header />}
      {!isCheckoutPage && <Navbar />}
      {!isCheckoutPage && showCart && <Cart/>}
      {!isCheckoutPage && showWishlist && <Wishlist/>}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/about" element={<About/> } />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/products/:prod_id" element={<ProductDetailPage/>} />
        <Route path="/checkout" element={ <Checkout/>}/>
        <Route path="/paymentsuccessful" element={<PaymentSuccessful/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
