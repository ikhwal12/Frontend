import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar-style.css";
import logohd from "../../assets/logohd.png";
import love from "../../assets/love.png";
import keluar from "../../assets/keluar.png";
import Wishlist from "./Wishlist";
import keranjang from "../../assets/keranjang.png";
import Logout from "./Logout";
import logologout from "../../assets/logologout.png";
/*<Link to="/Home/">Home</Link>*/
const Navbar = () => {
  const [buttonWishlist, setButtonWishlist] = useState(false);
  const [buttonLogout, setButtonLogout] = useState(false);
  return (
    <div className="boxnavbar">
      <div className="boxnavbarkiri">
        <img src={logohd} alt="" className="logo" />
      </div>
      <div className="boxnavbarkanan">
        <span className="isilink">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <img
              src={love}
              className="love"
              alt="love"
              onClick={() => setButtonWishlist(true)}
            />
            <Wishlist trigger={buttonWishlist} setTrigger={setButtonWishlist}>
              <div className="dalamWishlist">
                <img className="keranjang" src={keranjang} alt="keranjang" />
                <p className="p1wishlist">Oops.. Keranjang anda masih kosong</p>
                <p className="p2wishlist">
                  Temukan berbagai produk menarik di RidTech!
                </p>
                <a href="product" className="p3wishlist">
                  Cari Produk
                </a>
              </div>
            </Wishlist>
            <img
              src={keluar}
              className="logokeluar"
              alt="keluar"
              onClick={() => setButtonLogout(true)}
            />
            <Logout trigger={buttonLogout} setTrigger={setButtonLogout}>
              <div className="dalamLogout">
                <img src={logologout} className="logologout" alt="logologout" />
                <p className="p1logout">Anda yakin ingin keluar?</p>
                <a href="/login" className="tombollogout">
                  Iya, Logout
                </a>
                <button
                  onClick={() => setButtonLogout(false)}
                  className="tombolkembali"
                >
                  Kembali ke halaman
                </button>
              </div>
            </Logout>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
