import React from "react";

export interface IDesigner {
  id?: string;
  name: string;
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

interface IDesignersListProps {
  designers: IDesigner[];
}

const DesignersList = (props: IDesignersListProps) => {
  const designerWrappers = props.designers.map((designer: IDesigner) => (
    <li key={designer.name}>{designer.name}</li>
  ));
  return <ul>{designerWrappers}</ul>;
};

export default DesignersList;
