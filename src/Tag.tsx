import React, { memo, useCallback } from "react";
import "./Tag.css";

export interface ITag {
  id?: string;
  name: string;
}

interface ITagProps {
  tag: ITag;
  onClick: (tag: ITag) => void;
  isSelected: boolean;
}

const Tag = (props: ITagProps) => {
  const onClick = useCallback(() => {
    props.onClick(props.tag);
  }, []);

  return (
    <li className={`tag ${props.isSelected ? "tag--selected" : ""}`}>
      <label
        id={`${props.tag.name}-tag`}
        htmlFor={`${props.tag.name}-input`}
        className="tag-content"
        onClick={onClick}
      >
        <input id={`${props.tag}-input`} type="checkbox" />
        {props.tag.name}
      </label>
    </li>
  );
};

export default memo(Tag);
