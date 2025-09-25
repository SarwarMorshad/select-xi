import React from "react";
import logo from "../../assets/logo.png";
import dollar from "../../assets/dollar.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar max-w-11/12 mx-auto">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-1">
          <span>6000000000</span>
          <span>Coin</span>
          <img src={dollar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
