import React from "react";
import ProjectCard from "./ProjectCard";
import {
  MyCart,
  CryptoExpert,
  FirstNews,
  BlazeStore,
} from "../static_files/ProjectObjects";
import "../styles/Project/Project.css";

export default function Project() {
  const ProjectList = [MyCart, CryptoExpert, BlazeStore, FirstNews];

  return (
    <>
      <div className="project-page-intro">
        <p className="project-page-header">My Projects</p>
        <p className="project-page-desc">
          Here are some of the open source project which I built using various
          technologies. You can find the complete source code by visiting the
          link present in each card.
        </p>
      </div>
      <div className="project-container">
        {ProjectList.map((item) => {
          return (
            <ProjectCard
              title={item.title}
              sneakpeek={item.sneakpeek}
              logo={item.logo}
            />
          );
        })}
      </div>
    </>
  );
}
