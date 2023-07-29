import "./App.scss";
import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./components/forms/login/Login";
import Header from "./components/header/Header";
import LandingPage from "./components/landing-page/LandingPage";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/forms/register/Register";
import ProductPage from "./components/product/product-page/ProductPage";
import ProductDetailPage from "./components/product/product-detail-page/ProductDetailPage";
import Cart from "./components/cart/Cart";
import { CartContext } from "./context/cartContext";
import { WishlistContext } from "./context/wishlistContext";
import Wishlist from "./components/wishlist/Wishlist";
import Checkout from "./components/checkout/Checkout";
import PaymentSuccessful from "./components/payment-successful/PaymentSuccessful";


const App = () => {
  const{showCart}=useContext(CartContext);
  const{showWishlist}=useContext(WishlistContext);
  const location=useLocation();
  const isCheckoutPage= location.pathname === '/checkout';
  return (
    <div>
      {!isCheckoutPage && <Header />}
      {!isCheckoutPage && <Navbar />}
      {!isCheckoutPage && showCart && <Cart/>}
      {!isCheckoutPage && showWishlist && <Wishlist/>}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
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
