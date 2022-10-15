import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  MyCart,
  TextUtility,
  BlazeStore,
  CryptoExpert,
  FirstNews,
} from "./static_files/projectDesc.js";
import "./styles/projectView.css";
import cryptoExpertimg1 from "./assets/CryptoExpert/cryptoExpertimg1.png";
import cryptoExpertimg2 from "./assets/CryptoExpert/cryptoExpertimg2.png";
import cryptoExpertimg3 from "./assets/CryptoExpert/cryptoExpertimg3.png";
import firstnews1 from "./assets/FirstNews/firstnews1.png";
import firstnews2 from "./assets/FirstNews/firstnews2.png";
import firstnews3 from "./assets/FirstNews/firstnews3.png";

export default function ProjectView(props) {
  const [project, setProject] = useState(MyCart);
  const [previewImages, setPreviewImages] = useState([]);
  const [showPopup, setShowPopup] = useState({ imagesrc: "", show: false });
  const location = useLocation();

  const handleImageClick = (e) => {
    setShowPopup({ imagesrc: e.target.src, show: true });
  };

  const handlePopupClose = () => {
    setShowPopup({ imagesrc: "", show: false });
  };

  useEffect(() => {
    if (location.state.from == "FirstNews") {
      setProject(FirstNews);
      setPreviewImages([firstnews1, firstnews2, firstnews3]);
    }
    if (location.state.from === "MyCart") {
      setProject(MyCart);
    }
    if (location.state.from === "TextUtility") {
      setProject(TextUtility);
    }
    if (location.state.from === "BlazeStore") {
      setProject(BlazeStore);
    }
    if (location.state.from === "CryptoExpert") {
      setProject(CryptoExpert);
      setPreviewImages([cryptoExpertimg1, cryptoExpertimg2, cryptoExpertimg3]);
    }
  }, []);

  return (
    <>
      <div className="projectContainer">
        <p className="header mt-3">{project.title}</p>
        <div className="project-img my-4">
          <img
            src={previewImages[0]}
            alt="1"
            id="img1"
            onClick={handleImageClick}
          />
          <img
            src={previewImages[1]}
            alt="2"
            id="img2"
            onClick={handleImageClick}
          />
          <img
            src={previewImages[2]}
            alt="3"
            id="img3"
            onClick={handleImageClick}
          />
        </div>
        <div className="project-desc mt-4">{project.description1}</div>
        <div
          className={showPopup.show ? "popup-img show-display" : "no-display"}
        >
          <span id="closebtn" onClick={handlePopupClose}>
            &times;
          </span>
          <img src={showPopup.imagesrc} alt="img1" />
        </div>
      </div>
    </>
  );
}
