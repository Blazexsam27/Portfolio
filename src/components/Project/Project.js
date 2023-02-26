import React from "react";
import ProjectCard from "./ProjectCard";
import {
  GetGood,
  CryptoExpert,
  FirstNews,
  BlazeStore,
  TextUtil,
  LeaveManagement,
  EduWebApp,
} from "../static_files/ProjectObjects";
import "../styles/Project/Project.css";

export default function Project() {
  const projectList = [GetGood, CryptoExpert, BlazeStore, FirstNews, EduWebApp];
  const miniProjectList = [TextUtil, LeaveManagement];

  return (
    <>
      <div className="project-page-intro">
        <p className="project-page-header">
          MY <span>PROJECTS</span>
        </p>
        <p className="project-page-desc">
          Here are some of the open source project which I built using various
          technologies. You can find the complete source code by visiting the
          link present in each card.
        </p>
      </div>
      <div className="project-container">
        {projectList.map((item) => {
          return (
            <ProjectCard
              title={item.title}
              sneakpeek={item.sneakpeek}
              logo={item.logo}
              date={item.date}
            />
          );
        })}
      </div>
      <p className="mini-project-header">
        MINI <span>PROJECTS</span>
      </p>
      <div className="project-container">
        {miniProjectList.map((item) => {
          return (
            <ProjectCard
              title={item.title}
              sneakpeek={item.sneakpeek}
              logo={item.logo}
              date={item.date}
            />
          );
        })}
      </div>
    </>
  );
}
