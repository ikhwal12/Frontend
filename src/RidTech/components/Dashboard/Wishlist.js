import React from "react";
import "../../styles/wishlist.css";

function Wishlist(props) {
  return props.trigger ? (
    <div className="wishlist-container">
      <div className="wishlist-inner">
        <button className="tutup-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default Wishlist;
