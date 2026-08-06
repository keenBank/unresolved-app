import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import "./nav.css";

export default function NavMobile() {
  return (
    <div className="site-nav-mobile">
      <div
        className="menu"
        onClick={() => {
          document.querySelector(".mobile_nav").classList.toggle("visible");
        }}
      >
        <HiOutlineMenu />
      </div>

      <div className="mobile_nav">
        <Link to="/" style={{ color: "#c22735" }}>
          الرئيسية
        </Link>
        <a href="https://unresolvedcass.com/">شراء قضية</a>
        <a href="https://wa.me/966509330727" target="_blank" rel="noreferrer">مستند ناقص</a>
      </div>
    </div>
  );
}
