import React from "react";
import Title from "../assets/title.svg";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="margin-bottom-regular" style={{ position: "relative" }}>
      <img alt="Designers of Vietnam" src={Title} />
      <a className="header-link margin-right-big" href="/about">
        <span>🇻🇳</span>
      </a>
      <a className="header-link" href={process.env.REACT_APP_FORM_URL}>
        <span>🛵</span>
      </a>
    </header>
  );
};

export default MainHeader;
