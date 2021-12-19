import React from "react";

export default function Blog() {
  return (
    <>
      <div className="container my-4">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded"
          style={{ backgroundColor: "#07c900" }}
        >
          <div className="col-md-6 px-0">
            <h1 className="display-8 fst-italic">
              Blog Posts Daily / Weekly / Monthly. I Don't Really Know
            </h1>
            <p className="lead my-3">
              Here are some blog post which i wrote during my project building
              days, There are some blogs regarding tutorials, some for random
              stuff related to programming, technologies, I usually write blogs
              on LinkedIn so you can find all my blogs there too.
            </p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  Tutorial
                </strong>
                <h3 className="mb-0">
                  An Article about building dynamic theme for
                  Webpages/Components using ReactJS.
                </h3>
                <div className="mb-1 text-muted">16/12/2021</div>
                <p className="card-text mb-auto">
                  Have you ever wanted to build different themes for your
                  webpages/components. So, here's a tutorial for you ...
                </p>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/pulse/dynamic-color-theme-palatte-using-reactjs-sanju-raj/"
                  className="stretched-link"
                >
                  Continue reading
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">
                  Tutorial
                </strong>
                <h3 className="mb-0">
                  The Art Of Problem Solving (Competitive programming/
                  Development logic building)
                </h3>
                <div className="mb-1 text-muted">18/12/2021</div>
                <p className="mb-auto">
                  Ever stucked at programming problems during competitive
                  programming/ development. So, here's a tutorial...
                </p>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/post/edit/6877129837811646464/"
                  className="stretched-link"
                >
                  Continue reading
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
