import hp1 from "../../assets/hp1.png";
import hp2 from "../../assets/hp2.png";
import hp3 from "../../assets/hp3.png";
import hp4 from "../../assets/hp4.png";
import "../../styles/home-style.css";
import Navbar from "./Navbar";
const Home = () => {
  return (
        <div className="dashboard-container">
          <Navbar />
          <div className="kotak1home">
            <p className="p1home">Samsunk 15 Promax</p>
            <p className="p2home">Faster, Bigger Size</p>
            <div className="infobeli1">
              <ul>
                <li>Info</li>
                <li>Buy</li>
              </ul>
            </div>
            <div className="hp1">
              <img src={hp1} className="hp1" alt="" />
            </div>
          </div>
          <div className="kotak2home">
            <p className="p3home">Samsunk 15 Promax</p>
            <p className="p4home">Camera 360 & Ultra Wide</p>
            <div className="infobeli1">
              <ul>
                <li>Info</li>
                <li>Buy</li>
              </ul>
            </div>
            <div className="hp2">
              <img src={hp2} className="hp2" alt="" />
            </div>
          </div>
          <div className="kotak3home">
            <div className="kotak3homekiri">
              <img src={hp3} className="hp3" alt="" />
              <p className="p5home">Samsunk 14 Mini Pro</p>
              <p className="p6home">Wide Screen, Better Experience</p>
            </div>
            <div className="kotak3homekanan">
              <img src={hp4} className="hp4" alt="" />
              <p className="p7home">Samsunk 14-001DC</p>
              <p className="p8home">Run With New OS</p>
            </div>
          </div>
          <div className="kotak4home">
            <div className="kotak4home1">
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
            <div className="kotak4home1">
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
            <div className="kotak4home1">
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
          <footer className="footerhome">Copyright 2023 by RidTech</footer>
        </div>
      
  );
};
export default Home;
