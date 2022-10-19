import React from "react";
import { Link } from "react-router-dom";
import "../styles/Widgets/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <Link to={""}>
            <li>Home</li>
          </Link>
          <Link to={"/projects"}>
            <li>Projects</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
        </ul>
        <ul>
          <Link to={"//github.com/Blazexsam27"} target="_blank">
            <li>
              <i className="zmdi zmdi-github-alt"></i>
            </li>
          </Link>
          <Link to={"//www.instagram.com/blazexsam_dev/"} target="_blank">
            <li>
              <i className="zmdi zmdi-instagram"></i>
            </li>
          </Link>
          <Link
            to={"//www.linkedin.com/in/sanju-raj-6335aa184/"}
            target="_blank"
          >
            <li>
              <i className="zmdi zmdi-linkedin"></i>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
