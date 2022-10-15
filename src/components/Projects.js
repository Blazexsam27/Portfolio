import React from "react";
import mycart_logo from "./assets/images/mycart_logo.png";
import first_logo from "./assets/images/firstnews_logo.png";
import text_utils from "./assets/images/text_utils.png";
import crypto_expert_logo from "./assets/images/crypto_expert_logo.png";
import blaze_store from "./assets/images/blaze-store.png";
import "./styles/projects.css";

import {
  MyCart,
  TextUtility,
  BlazeStore,
  CryptoExpert,
  FirstNews,
} from "./static_files/projectDesc.js";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">My Projects</h1>
            <p className="lead text-muted">
              Here are some of the open source project which I built using
              various technologies. You can find the complete source code by
              visiting the link present in each card.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <ProjectCard
              title={"FirstNews"}
              sneakpeek={FirstNews.sneakpeek}
              image={first_logo}
              object={FirstNews.title}
              date={"22/09/2022"}
            />
            {/* Project 1 */}
            <ProjectCard
              title={"MyCart"}
              sneakpeek={MyCart.sneakpeek}
              image={mycart_logo}
              object={MyCart.title}
              date={"12/10/2021"}
            />
            {/* Project 2 */}
            <ProjectCard
              title={"CryptoExpert"}
              sneakpeek={CryptoExpert.sneakpeek}
              image={crypto_expert_logo}
              object={CryptoExpert.title}
              date={"12/02/2021"}
            />
            {/* Project 3 */}
            <ProjectCard
              title={"TextUtility"}
              sneakpeek={TextUtility.sneakpeek}
              image={text_utils}
              object={TextUtility.title}
              date={"27/11/2021"}
            />
            {/* Project 4 */}
            <ProjectCard
              title={"BlazeStore"}
              sneakpeek={BlazeStore.sneakpeek}
              image={blaze_store}
              object={BlazeStore.title}
              date={"25/02/2022"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
