import React from "react";
import "../styles/About/About.css";
import portfolio_pic from "../../assets/images/portfolio.png";
import ProgressBar from "../Widgets/ProgressBar";

export default function About() {
  const skills = [
    { name: "React", value: 90 },
    { name: "Express", value: 90 },
    { name: "Node", value: 90 },
    { name: "Django", value: 80 },
    { name: "Javascript", value: 90 },
    { name: "Python", value: 95 },
    { name: "CSS", value: 95 },
    { name: "HTML", value: 95 },
    { name: "BOOTSTRAP", value: 90 },
  ];

  return (
    <>
      <p className="about-header">
        ABOUT <span>ME</span>
      </p>
      <div className="about-container">
        <img src={portfolio_pic} alt="" />
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
        </section>
      </div>
      <section className="bottom-about-section">
        <div className="skills-container">
          {skills.map((item) => {
            return (
              <div>
                <ProgressBar value={item.value} name={item.name} />
                <p className="skill-text">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="achievements">
          <p className="achievements-header">ACHIEVEMENTS</p>
          <p className="achievements-text">
            Level 3 Coder at codechef. <br />
            5 Star problem solver on Hackerrank. <br />
            7+ Open Source software contributions. <br />
            Former Coding Blocks Student Ambassador. <br />
            Global Rank 82 in codechef November 2021 challenge. <br />
            Built backend APIs for data filteration, data manipulation and data
            analytic graphs for shopify. <br />
            Built real time sign language detector using tensorflow transfer
            learning and ssd_mobile_net. <br />
            Built real-time crypto market statistics tool web app. <br />
          </p>
        </div>
      </section>
    </>
  );
}
