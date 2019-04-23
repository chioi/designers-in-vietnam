import React from "react";

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
      <div>
        <img
          className="designer-portrait"
          alt={`${props.designer.name}'s portrait`}
          src={props.designer.picture.large}
        />
        <h2 className="designer-name">{props.designer.name}</h2>
        <h3 className="designer-title">{props.designer.title}</h3>
        <p className="designer-bio">{props.designer.bio}</p>
      </div>
      <footer className="designer-contact">
        <a className="designer-link margin-right-big" href={props.designer.urls.social}>
          <span className="margin-right-medium">👋</span>Contact
        </a>
        <a className="designer-link" href={props.designer.urls.personal}>
          <span className="margin-right-medium">🌐</span>Portfolio
        </a>
      </footer>
    </article>
  );
};

export default Designer;
