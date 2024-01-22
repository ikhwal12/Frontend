import React from "react";
import "../../styles/contact-style.css";
import kotak1 from "../../assets/kotak1.png";
import kotak2 from "../../assets/kotak2.png";
import kotak3 from "../../assets/kotak3.png";
import logohd from "../../assets/logohd.png";
import imgcontact from "../../assets/imgcontact.png";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="kotak1contact">
        <p className="p1contact">Contact Us On</p>
      </div>
      <div className="isikontak">
        <a href="https://instagram.com">
          <img src={kotak1} className="kotak1" />
        </a>
        <a href="https://gmail.com">
          <img src={kotak2} className="kotak2" />
        </a>
        <a href="https://whatsapp.com">
          <img src={kotak3} className="kotak3" />
        </a>
      </div>
      <div className="kotak2contact">
        <img src={imgcontact} className="imgcontact" />
      </div>
      <div className="kotak3contact">
        <p className="p3contact">Find Everything You Want On</p>
        <a href="home">
          <img src={logohd} className="logobawah" />
        </a>
        <hr className="gariscontact" />
      </div>
      <div className="kotak4contact">
        <div className="kotak4contact1">
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
        <div className="kotak4contact1">
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
        <div className="kotak4contact1">
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
      <footer className="footercontact">Copyright 2023 by RidTech</footer>
    </div>
  );
};
export default Contact;
