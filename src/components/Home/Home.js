import React from "react";
import TypeWriter from "typewriter-effect";
import portfolio_pic from "../../assets/images/portfolio.png";
import splash from "../../assets/images/splash.png";
import "../styles/Home/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="intro-container">
        <p className="intro-text">Hi! I AM</p>
        <div className="name">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter.typeString("SANJU RAJ PRASAD").start();
            }}
          />
        </div>
        <p className="intro-text">AND I AM A WEB DEVELOPER</p>
      </div>
      <div className="intro-image">
        <img src={splash} alt="" className="splash" />
        <img src={portfolio_pic} className="profile-pic" />
      </div>
    </div>
  );
}
