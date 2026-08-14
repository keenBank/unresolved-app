import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import bg from "../../assets/home/images/header.png";
import cover from "../../assets/home/images/cover.png";
import "../../styles/cases.css";
import "./case-home.css";

// Shared "case landing" page used by every case (Wedding, FinalShow,
// DeathInTheDarkness): shows that case's own story + links to its 3 puzzles
// only, per the "case page shows just its own puzzles" requirement.
export default function CaseHome({
  slug,
  title,
  description,
  thumbnail,
  welcomeUrl,
}) {
  return (
    <div className="App">
      <Header bgImage={bg} coverImage={cover} />
      <main className="cases case-home">
        <div className="cases_container">
          <div>
            <div className="order case_image">
              <img src={thumbnail} alt=" " />
            </div>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        {welcomeUrl && (
          <div className="case-home__welcome">
            <a
              className="cta"
              href={welcomeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>مرحباً أيها المحقق</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M12,5 L2,5"></path>
                <polyline points="5 1 1 5 5 9"></polyline>
              </svg>
            </a>
          </div>
        )}
        <div className="case-home__puzzles">
          <Link className="cta" to={`/case/${slug}/puzzle1`}>
            <span>تابع إلى المهمة الأولى</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M12,5 L2,5"></path>
              <polyline points="5 1 1 5 5 9"></polyline>
            </svg>
          </Link>
          <Link className="cta" to={`/case/${slug}/puzzle2`}>
            <span>تابع إلى المهمة الثانية</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M12,5 L2,5"></path>
              <polyline points="5 1 1 5 5 9"></polyline>
            </svg>
          </Link>
          <Link className="cta" to={`/case/${slug}/puzzle3`}>
            <span>تابع إلى المهمة الثالثة</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M12,5 L2,5"></path>
              <polyline points="5 1 1 5 5 9"></polyline>
            </svg>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
