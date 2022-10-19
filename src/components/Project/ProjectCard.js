import React from "react";
import { Link } from "react-router-dom";
import "../styles/Project/ProjectCard.css";

export default function ProjectCard(props) {
  const { title, sneakpeek, logo } = props;
  return (
    <div className="project-card-container" key={title}>
      <img className="card-image" src={logo} />
      <div className="card-title">{title}</div>
      <div className="card-desc">{sneakpeek}</div>
      <section className="bottom-section">
        <Link to={"/projectView"} state={{ title: title }}>
          <div className="card-button">Read More</div>
        </Link>
        <div className="card-date">12/12/32</div>
      </section>
    </div>
  );
}
