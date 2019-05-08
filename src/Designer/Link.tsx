import React from "react";

interface ILinkProps {
  url?: string;
}

const Link: React.FC<ILinkProps> = ({ url, children }) => {
  return (
    <a className="designer-link" href={url}>
      <div className="display-flex align-items-center">{children}</div>
    </a>
  );
};

export default Link;
