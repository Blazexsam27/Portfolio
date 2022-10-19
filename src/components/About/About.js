import React from "react";
import "../styles/About/About.css";
import crypto_expert_logo from "../../assets/images/logos/crypto_expert_logo.png";

export default function About() {
  return (
    <>
      <p className="about-header">
        ABOUT <span>ME</span>
      </p>
      <div className="about-container">
        <img src={crypto_expert_logo} alt="" />
        <section className="about-text">
          <div className="text">
            I have been learning programming and software development since
            2016, and during this period i have created a lot of projects some
            of them are uploaded at github as an open source contribution, (You
            can checkout Projects page for more information). <br />
            <br />I have completed my Higher secondary education from Kendriya
            Vidyalaya (CSBE Board) No.3 Baroda, Gujarat, and right now pursuing
            career as a Software Engineer.
          </div>
          <div className="skills-container"></div>
          <div className="achievements"></div>
        </section>
      </div>
    </>
  );
}
