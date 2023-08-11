import React from "react";
import './Home.css';
// import { Link } from "react-router-dom";
 import { FiArrowRight } from "react-icons/fi";
// import Navbar from "./Navbar.js"
import BannerImage from "../assets/img.png";
const Home = () => {
    return (
<div className="home-container">
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
            Extract information form your data
          </h1>
          <p className="primary-text">
           We provide insightful information from various file types!
                  Whether you have a document, spreadsheet, image, or any other file format, our API is designed to extract valuable
                  details and present them to you in a structured manner.
          </p>
          <button className="secondary-button">
            Extract Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          {<img src={BannerImage} alt="" /> }
        </div>
      </div>
    </div>
        )
}

export default Home;