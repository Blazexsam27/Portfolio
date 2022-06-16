import React, { Component } from "react";
import "./styles/Home.css";
import "./styles/phone_Home.css";
import { Link } from "react-router-dom";
import { swing, pulse, slideInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default function Home() {
  const styles = {
    slideInRight: {
      animation: "x 1s",
      animationName: Radium.keyframes(slideInRight, "slideInRight"),
    },
    pulse: {
      animation: "x 1s",
      animationName: Radium.keyframes(pulse, "pulse"),
    },
    swing: {
      animation: "x 1s",
      animationName: Radium.keyframes(swing, "swing"),
    },
  };

  const TextStyle = {};

  return (
    <StyleRoot>
      <div
        className="text-secondary px-4 py-5 text-center midContainer"
        style={styles.slideInRight}
      >
        <div className="py-5 content">
          <h1 className="display-5 fw-bold text-white ">
            Hi! I am Sanju Raj Prasad
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 text-white">
              Software Developer (Django, ReactJS, Angular, Python), <br />
              Flutter Developer (UI Designing, Frontend Development) <br />
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                to="/projects"
              >
                Projects
              </Link>
              <Link
                to="/blog"
                type="button"
                className="btn btn-outline-light btn-lg px-4"
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div id="achievements">
          <span className="heading my-2">About:</span>
        </div>
        <div className="bottomContainer1">
          <p id="about" style={styles.swing}>
            I have been learning programming and software development since
            2016, and during this period i have created a lot of projects some
            of them are uploaded at github as an open source contribution, (You
            can checkout Projects page for more information). <br />
            <br />I have completed my Higher secondary education from Kendriya
            Vidyalaya (CSBE Board) No.3 Baroda, Gujarat, and right now pursuing
            career as a Software Engineer.
          </p>
        </div>
      </section>
      <section>
        <div id="achievements">
          <span className="heading">Achievements:</span>
        </div>
        <div className="bottomContainer1">
          <br />
          <p style={styles.swing}>
            Level 3 Coder at codechef. <br />
            4 Star problem solver on Hackerrank. <br />
            5+ Open Source software contributions. <br />
            Former Coding Blocks Student Ambassador. <br />
            Global Rank 82 in codechef November challenge. <br />
            Created backend data manipulation logic and data analytic graphs for
            shopify. <br />
            Created real time sign language detector using tensorflow transfer
            learning and ssd_mobile_net. <br />
          </p>
          <br />
          <br />
        </div>
      </section>
      <section>
        <div id="achievements">
          <span className="heading">Contact:</span>
        </div>
        <br />
        <div className="bottomContainer1">
          <p style={styles.swing}>
            Email Id: samblaze275@gmail.com
            <br />
            Github:{" "}
            <Link to="//github.com/Blazexsam27">
              https://github.com/Blazexsam27
            </Link>{" "}
            <br />
            Instagram:{" "}
            <Link to="//www.instagram.com/blazexsam_dev/">
              https://www.instagram.com/blazexsam_dev/
            </Link>{" "}
            <br />
            LinkedIn:{" "}
            <Link to="//www.linkedin.com/in/sanju-raj-6335aa184/">
              https://www.linkedin.com/in/sanju-raj-6335aa184/
            </Link>
          </p>
          <br />
        </div>

        <br />
        <br />
      </section>
    </StyleRoot>
  );
}
