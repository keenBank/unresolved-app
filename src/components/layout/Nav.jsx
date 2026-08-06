import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav_bar">
        <Link to="/" style={{ color: "#c22735" }}>
          الرئيسية
        </Link>
        <a href="https://unresolvedcass.com/">شراء قضية</a>
        <a href="https://wa.me/966509330727" target="_blank" rel="noreferrer">مستند ناقص</a>
      </div>
    </nav>
  );
}
