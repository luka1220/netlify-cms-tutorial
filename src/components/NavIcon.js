import React from "react";
import "../css/navIcon.css";

const NavIcon = () => (
  <div
    id="nav-icon3"
    onClick={() => {
      document.getElementById("nav-icon3").classList.toggle("open");
      document.getElementById("nav-menu").classList.toggle("closed");
    }}
  >
    <span />
    <span />
    <span />
    <span />
  </div>
);

export default NavIcon;
