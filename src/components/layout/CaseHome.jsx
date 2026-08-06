import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import bg from "../../assets/home/images/header.png";
import cover from "../../assets/home/images/cover.png";
import next from "../../assets/shared/images/next.png";
import "../../styles/cases.css";
import "./case-home.css";

// Shared "case landing" page used by every case (Wedding, FinalShow,
// DeathInTheDarkness): shows that case's own story + links to its 3 puzzles
// only, per the "case page shows just its own puzzles" requirement.
export default function CaseHome({ slug, title, description, thumbnail }) {
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
        <div className="case-home__puzzles">
          <Link className="next case-home__puzzle" to={`/case/${slug}/puzzle1`}>
            <img src={next} alt="" />
            <span>المهمة الأولى</span>
          </Link>
          <Link className="next case-home__puzzle" to={`/case/${slug}/puzzle2`}>
            <img src={next} alt="" />
            <span>المهمة الثانية</span>
          </Link>
          <Link className="next case-home__puzzle" to={`/case/${slug}/puzzle3`}>
            <img src={next} alt="" />
            <span>المهمة الثالثة</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
