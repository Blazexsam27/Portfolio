import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="midContainer">
        <div className="content">
          <h1>Hi! I am Sanju Raj Prasad</h1>
          <p className="bio">
            Software Developer (Django, ReactJS, Angular, Python), <br />
            Flutter Developer (UI Designing, Frontend Development) <br />
          </p>
          <Link to="/projects">
            <button className="customBtn">
              Explore
              <svg
                style={{ margin: "4px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="bi bi-arrow-right arrowIcon"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <div className="px-4 py-5 my-5 text-center">
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
      </div>
    </>
  );
}
