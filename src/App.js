import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/layout";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Blogs from "./pages/Blogs";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import Singleblog from "./pages/Singleblog";
import Privacypolicy from "./pages/Privacypolicy";
import Refundpolicy from "./pages/Refundpolicy";
import Shippingpolicy from "./pages/Shippingpolicy";
import TermAndCondition from "./pages/TermAndCondition";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<Singleblog />} />
            <Route path="product" element={<Store />} />
            <Route path="product/product/:id" element={<SingleProduct />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<Privacypolicy />} />
            <Route path="refund-policy" element={<Refundpolicy />} />
            <Route path="shipping-policy" element={<Shippingpolicy />} />
            <Route path="term-and-condition" element={<TermAndCondition />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
