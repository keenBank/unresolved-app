import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const activeStyle = { color: "#c22735" };

export default function PuzzleNav({ caseSlug, active }) {
  return (
    <nav className="puzzle-nav">
      <div className="nav_bar">
        <Link to={`/case/${caseSlug}`}>الرئيسية</Link>
        <Link
          to={`/case/${caseSlug}/puzzle1`}
          style={active === 1 ? activeStyle : undefined}
        >
          مهمة 1
        </Link>
        <Link
          to={`/case/${caseSlug}/puzzle2`}
          style={active === 2 ? activeStyle : undefined}
        >
          مهمة 2
        </Link>
        <Link
          to={`/case/${caseSlug}/puzzle3`}
          style={active === 3 ? activeStyle : undefined}
        >
          مهمة 3
        </Link>
      </div>
    </nav>
  );
}
