import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  const { title, image, sneakpeek, object, date } = props;
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="cardImageContainer">
          <img src={image} alt="" className="cardImageView" />
        </div>

        <div className="card-body">
          <h5>{title}</h5>
          <p className="card-text">{sneakpeek}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={"/projectView"} state={{ from: object }}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
              </Link>
            </div>
            <small className="text-muted">{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
