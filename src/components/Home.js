import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="text-secondary px-4 py-5 text-center midContainer">
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

      {/* <div
        id={"about_section"}
        className="px-4 py-5 my-5 text-center bottomContainer"
      >
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 my-4">
            I have been learning programming and software development since
            2016, and during this period i have created a lot of projects some
            of them are uploaded at github as an open source contribution, (You
            can checkout Projects page for more information). <br />
            <br />
            <strong>Achievements:</strong>
            <br />
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
          <p className="lead my-3">
            <strong>Contact:</strong>
            <br />
            Email Id: samblaze275@gmail.com <br />
            Github Profile:{" "}
            <a target="_blank" href="https://github.com/Blazexsam27">
              https://github.com/Blazexsam27
            </a>{" "}
            <br />
            LinkedIn Profile:{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sanju-raj-6335aa184/"
            >
              https://www.linkedin.com/in/sanju-raj-6335aa184/
            </a>
            <br />
            Instagram Profile:{" "}
            <a target="_blank" href="https://www.instagram.com/blazexsam_dev/">
              https://www.instagram.com/blazexsam_dev/
            </a>
            <br />
            Resume:
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1DM7sY9PC-2-KpTj1VolKGI-QJnvbROr3/view?usp=sharing"
            >
              https://drive.google.com/file/d/1DM7sY9PC-2-KpTj1VolKGI-QJnvbROr3/view?usp=sharing
            </a>
          </p>

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/projects">
              <button type="button" className="btn btn-info btn-lg px-4 gap-3">
                Projects
              </button>
            </Link>
            <Link to="/blog">
              <button
                type="button"
                className="btn btn-outline-warning btn-lg px-4"
              >
                Blogs
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="bottomContainer">
        <p>
          I have been learning programming and software development since 2016,
          and during this period i have created a lot of projects some of them
          are uploaded at github as an open source contribution, (You can
          checkout Projects page for more information). <br />
          <br />
          <strong>Achievements:</strong>
          <br />
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
      </div>
    </>
  );
}
