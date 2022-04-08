import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", alignItems: "space-between" }}>
      <span className="logo">Reduc Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>

        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">cart Items:0</span>
      </div>
    </div>
  );
};

export default Navbar;
