import { Link } from "@reach/router";
import React from "react";
import Title from "../assets/title.svg";
import "./MainHeader.sass";

const MainHeader = () => {
  return (
    <header className="position-relative clearfix">
      <div className="main-navigation main-header-block">
        <a className="header-link" href={process.env.REACT_APP_FORM_URL}>
          <span>🛵</span>
        </a>
        <Link to="/about" className="header-link margin-right-big">
          <span>🇻🇳</span>
        </Link>
      </div>
      <div className="main-header-block">
        <Link to="/">
          <img alt="Designers of Vietnam" src={Title} className="title-image" />
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
