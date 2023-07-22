import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./components/forms/login/Login";
import Header from "./components/header/Header";
import LandingPage from "./components/landing-page/LandingPage";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/forms/register/Register";
import "./App.scss";
import ProductPage from "./components/product/product-page/ProductPage";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/products" element={<ProductPage/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
