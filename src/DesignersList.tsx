import React from "react";
import Designer, { IDesigner } from "./Designer";
import "./Designer.css";

interface IDesignersListProps {
  designers: IDesigner[];
}

const DesignersList = (props: IDesignersListProps) => {
  const designerWrappers = props.designers.map((designer: IDesigner) => (
    <Designer key={designer.name} designer={designer} />
  ));
  return <div className="horizontal-list padding-vertical-regular">{designerWrappers}</div>;
};

export default DesignersList;