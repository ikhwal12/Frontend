import React from "react";
import "../../styles/logout.css";

function Logout(props) {
  return props.trigger ? (
    <div className="logout-container">
      <div className="logout-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
}
export default Logout;
