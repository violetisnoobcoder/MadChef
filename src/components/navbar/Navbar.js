import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        {/* Logo on the right side of navigation */}
        <div className="left">
          <h1 className="NavTitle">Bish!Bash!Bosh!</h1>
        </div>
        {/* Page links on the right side of navigation */}
        <div className="right">
          <span>explore</span>
          <span>sign up</span>
          <span>login</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
