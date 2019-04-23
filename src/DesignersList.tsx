import React from "react";
import Designer, { IDesigner } from "./Designer";
import "./Designer.css";

interface IDesignersListProps {
  designers: IDesigner[];
}

const DesignersList = (props: IDesignersListProps) => {
  const designerWrappers = props.designers.map((designer: IDesigner, i: number) => (
    <Designer key={`${designer.name}-${i}`} designer={designer} />
  ));
  return <div className="horizontal-list padding-vertical-regular justify-space-between">{designerWrappers}</div>;
};

export default DesignersList;
