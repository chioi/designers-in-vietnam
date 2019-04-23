import { Link } from "@reach/router";
import React from "react";
import Title from "../assets/title.svg";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="margin-bottom-regular position-relative">
      <Link to="/">
        <img alt="Designers of Vietnam" src={Title} className="title-image" />
      </Link>
      <Link to="/about" className="header-link margin-right-large">
        <span>🇻🇳</span>
      </Link>
      <a className="header-link" href={process.env.REACT_APP_FORM_URL}>
        <span>🛵</span>
      </a>
    </header>
  );
};

export default MainHeader;
