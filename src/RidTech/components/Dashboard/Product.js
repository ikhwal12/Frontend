import React from "react";
import allProducts from "../data/ProductName";
import "../../styles/product.css";
import Productlist from "./Productlist";
import Navbar from "./Navbar";

const Product = () => {
  return (
    <section id="products">
      <Navbar />
      <h2 className="title-section">Products</h2>
      <div className="product-container">
        {allProducts.map((product) => {
          return (
            <Productlist
              key={product.id}
              cover={product.gambar_product}
              title={product.nama_product}
              description={product.deskripsi}
              harga={product.harga}
            />
          );
        })}
      </div>
      <div className="kotakbawahproduct">
        <div className="kotakproduct1">
          <p>
            <b>RidTech</b>
          </p>
          <p>About</p>
          <p>Our Product</p>
          <p>New Brand</p>
          <p>Cool Insight</p>
          <p>Media and News</p>
          <p>Language</p>
          <p>Contact Us</p>
        </div>
        <div className="kotakproduct2">
          <p>
            <b>RidTech</b>
          </p>
          <p>About</p>
          <p>Our Product</p>
          <p>New Brand</p>
          <p>Cool Insight</p>
          <p>Media and News</p>
          <p>Language</p>
          <p>Contact Us</p>
        </div>
        <div className="kotakproduct3">
          <p>
            <b>RidTech</b>
          </p>
          <p>About</p>
          <p>Our Product</p>
          <p>New Brand</p>
          <p>Cool Insight</p>
          <p>Media and News</p>
          <p>Language</p>
          <p>Contact Us</p>
        </div>
      </div>
      <footer className="footerproduct">Copyright 2023 by RidTech</footer>
    </section>
  );
};

export default Product;
