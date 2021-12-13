import React, { Component } from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="midContainer">
        <div className="content">
          <h1>Hi! I am Sanju Raj Prasad</h1>
          <p className="bio my-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            In corporis minus praesentium quos quasi vitae illo?
          </p>
          <button className="customBtn">
            Explore
            <svg
              style={{ margin: "4px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="/docs/5.1/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            I have been learning programming and software development since
            2016, and during this period i have created a lot of project some of
            them are uploaded at github as an open source contribution, (You can
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
            learning and ssd_mobile_net.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-info btn-lg px-4 gap-3">
              Projects
            </button>
            <button type="button" class="btn btn-outline-warning btn-lg px-4">
              Blogs
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
