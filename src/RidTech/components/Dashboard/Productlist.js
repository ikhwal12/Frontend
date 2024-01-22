import React, { useState } from "react";
import "../../styles/productlist.css";
import Popup from "./Popup";
import rating from "../../assets/rating.png";

const Productlist = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [wishlistPopup, setwishlistPopup] = useState(false);

  const tombolbeli = () => {
    alert("Berhasil ditambah ke Wishlist");
  };

  return (
    <div className="product">
      <img className="coverproduct"src={props.cover ?? "not-available.jpeg"} alt="product" />
      <div className="kontenproduk">
        <h4 className="title">{props.title}</h4>
        <h5 className="category">{props.harga}</h5>
        <img src={rating} className="rating" alt="rating" />
        <button className="Beli" onClick={() => setButtonPopup(true)}>
          Lihat Produk
        </button>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="popupkiri">
          <img
            className="imgdetail"
            src={props.cover ?? "not-available.jpeg"}
            alt="product"
          />
          <h4 className="titledetail">{props.title}</h4>
        </div>
        <div className="popupkanan">
          <h3 className="productdetailtext">Product Detail</h3>
          <h4 className="descriptiondetail">{props.description}</h4>
          <h5 className="hargadetail">{props.harga}</h5>
          <div className="kotaktombol">
            <button
              onClick={() => setwishlistPopup(true)}
              className="tombolbeli"
              x
            >
              Beli Sekarang
            </button>
            <button onClick={tombolbeli} className="tombolbeli">
              Tambahkan Ke Wishlist
            </button>
          </div>
        </div>
      </Popup>
      <Popup trigger={wishlistPopup} setTrigger={setwishlistPopup}>
        <h3>Pembelian Berhasil</h3>
      </Popup>
    </div>
  );
};

export default Productlist;
