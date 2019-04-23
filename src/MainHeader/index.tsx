import React from "react";
import Title from "../assets/title.svg";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="margin-bottom-regular position-relative">
      <img alt="Designers of Vietnam" src={Title} className="title-image"/>
      <a className="header-link margin-right-large" href="/about">
        <span>🇻🇳</span>
      </a>
      <a className="header-link" href={process.env.REACT_APP_FORM_URL}>
        <span>🛵</span>
      </a>
    </header>
  );
};

export default MainHeader;
