import React from "react";
import errorlogo from "../../assets/images/logos/404-logo.png";
import "../styles/ErrorPage.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-container">
      <img src={errorlogo} alt="" />
      <p className="message">
        PAGE NOT FOUND! <Link to={"/"}>GO BACK</Link>
      </p>
    </div>
  );
}
