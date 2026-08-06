import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import mobileCover from "../../assets/shared/images/mobile_cover.png";
import "./header.css";

export default function Header({ bgImage, coverImage }) {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://detectives-5126dc7943c5.herokuapp.com/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setNames(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header
      style={{
        backgroundImage: `url(${bgImage}), url(${coverImage})`,
      }}
    >
      <Nav />
      <NavMobile />
      <div className="banner">
        <div
          className="marquee_wrapper"
          style={{ animationDuration: `${names.length * 2}s` }}
        >
          <div className="marquee">
            <span className="dot"></span>
            <span className="master">Master Detectives</span>
            <span className="dot"></span>
            {names.map((data, index) => (
              <React.Fragment key={index}>
                <span> {data.name} </span>
                <span className="dot"></span>
                <span className="master">Master Detectives</span>
                <span className="dot"></span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <img className="mobile_cover" src={mobileCover} alt=" " />
    </header>
  );
}
