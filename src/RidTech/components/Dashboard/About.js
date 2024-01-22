import React from "react";
import "../../styles/about-style.css";
import imgabout from "../../assets/imgabout.png";
import imgabout2 from "../../assets/imgabout2.png";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="kotak1about">
        <img src={imgabout} className="imgabout" alt="img" />
        <p className="p1about1">We're All</p>
        <p className="p1about2">People Need</p>
      </div>
      <div className="kotak2about">
        <img src={imgabout2} className="imgabout2" alt="img2" />
      </div>
      <div className="kotak3about">
        <p className="p3about">About Us</p>
        <p className="p4about">
          RidTech is a large company that produces the largest electronic goods
          in North
        </p>
        <p className="p4about">
          Sumatra. Find interesting information that we have provided as a promo
          for you,
        </p>
        <p className="p4about">immediately get our goods at big discounts!</p>
        <hr className="garisabout" />
        <div className="kotak4about">
          <div className="kotak4about1">
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
          <div className="kotak4about1">
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
          <div className="kotak4about1">
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
        <footer className="footerabout">Copyright 2023 by RidTech</footer>
      </div>
    </div>
  );
};
export default About;
