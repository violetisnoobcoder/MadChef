import React from "react";
import "./splash.scss";

function Splash() {
  return (
    <div className="splash">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
      <div className="info">
        <span className="desc">
          Search your ingredients to create a new recipe
        </span>
      </div>
    </div>
  );
}

export default Splash;
