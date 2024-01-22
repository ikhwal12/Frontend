import React from "react";
import DashboardLayout from "./components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Dashboard/Home";
import Contact from "./components/Dashboard/Contact";
import About from "./components/Dashboard/About";
import Wishlist from "./components/Dashboard/Wishlist";
import Login from "./components/Login";
import Register from "./components/Register";
import Product from "./components/Dashboard/Product";

const RidTechApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
export default RidTechApp;
