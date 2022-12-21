// Component to view each project sepeartely.

import React, { useEffect, useState } from "react";
import {
  MyCart,
  CryptoExpert,
  FirstNews,
  BlazeStore,
  LeaveManagement,
} from "../static_files/ProjectObjects";
import { useLocation } from "react-router-dom";
import "../styles/Project/ProjectView.css";

import blazestore1 from "../../assets/images/BlazeStore/blazestore1.PNG";
import blazestore2 from "../../assets/images/BlazeStore/blazestore2.PNG";
import blazestore3 from "../../assets/images/BlazeStore/blazestore3.PNG";
import cryptoexpert1 from "../../assets/images/CryptoExpert/cryptoexpert1.png";
import cryptoexpert2 from "../../assets/images/CryptoExpert/cryptoexpert2.png";
import cryptoexpert3 from "../../assets/images/CryptoExpert/cryptoexpert3.png";
import firstnews1 from "../../assets/images/FirstNews/firstnews1.png";
import firstnews2 from "../../assets/images/FirstNews/firstnews2.png";
import firstnews3 from "../../assets/images/FirstNews/firstnews3.png";
import leavemanagement1 from "../../assets/images/LeaveManagement/home.PNG";
import leavemanagement2 from "../../assets/images/LeaveManagement/sign-in.PNG";
import leavemanagement3 from "../../assets/images/LeaveManagement/listing.PNG";

export default function ProjectView() {
  const location = useLocation();
  const [project, setProject] = useState({});
  const [previewImages, setPreviewImages] = useState([]);
  const [showPopup, setShowPopup] = useState({ imagesrc: "", show: false });

  const handleImageClick = (e) => {
    setShowPopup({ imagesrc: e.target.src, show: true });
  };

  const handlePopupClose = () => {
    setShowPopup({ imagesrc: "", show: false });
  };

  const setProjectDetails = () => {
    let title = location.state.title;
    if (title === "MyCart") {
      setProject(MyCart);
      setPreviewImages([blazestore1, blazestore2, blazestore3]);
    }
    if (title === "CryptoExpert") {
      setProject(CryptoExpert);
      setPreviewImages([cryptoexpert1, cryptoexpert2, cryptoexpert3]);
    }
    if (title === "BlazeStore") {
      setProject(BlazeStore);
      setPreviewImages([blazestore1, blazestore2, blazestore3]);
    }
    if (title === "FirstNews") {
      setProject(FirstNews);
      setPreviewImages([firstnews1, firstnews2, firstnews3]);
    }
    if (title == "LeaveManagement") {
      setProject(LeaveManagement);
      setPreviewImages([leavemanagement1, leavemanagement2, leavemanagement3]);
    }
  };

  useEffect(() => {
    setProjectDetails();
  }, []);

  return (
    <>
      <div className="projectContainer">
        <p className="header">{project.title}</p>
        <div className="project-img">
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
        <div className="project-desc">{project.description}</div>
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
