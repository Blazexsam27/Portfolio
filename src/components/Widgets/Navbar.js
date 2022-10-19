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
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        <ul>
          <Link to={"#"}>
            <li>
              <i className="zmdi zmdi-github-alt"></i>
            </li>
          </Link>
          <Link to={"#"}>
            <li>
              <i className="zmdi zmdi-instagram"></i>
            </li>
          </Link>
          <Link to={"#"}>
            <li>
              <i className="zmdi zmdi-linkedin"></i>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
