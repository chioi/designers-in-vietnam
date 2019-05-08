import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import "./Designer.sass";

export interface IDesigner {
  id?: string;
  name: string;
  title: string;
  bio: string;
  location: string;
  urls: {
    personal: string;
    social?: string;
  };
  picture: {
    small: string;
    large: string;
  };
  tags: string[];
}

interface IDesignerProps {
  designer: IDesigner;
}

const Designer = (props: IDesignerProps) => {
  return (
    <article className="designer">
      <div className="designer-wrapper">
        <img
          className="designer-portrait"
          alt={`${props.designer.name}'s portrait`}
          src={props.designer.picture.large}
        />
        <div className="designer-body">
          <header className="designer-header">
            <h2 className="designer-name">{props.designer.name}</h2>
            <h3 className="designer-title">{props.designer.title}</h3>
          </header>
          <p className="designer-bio">{props.designer.bio}</p>
          <footer className="designer-contact">
            <a className="designer-link" href={props.designer.urls.social}>
              <span className="margin-right-tiny">👋</span>Contact
            </a>
            <a className="designer-link" href={props.designer.urls.personal}>
              <span className="margin-right-tiny">🌐</span>Portfolio
            </a>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Designer;
