import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components";
import { Home, Cart, Details } from "../pages";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
