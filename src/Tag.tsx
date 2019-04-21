import React, { memo, useCallback, useEffect, useRef } from "react";
import Brushstroke from "./brushstroke";
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
  const id = `${props.tag.name}-tag`;
  const ref = useRef(null);
  useEffect(() => {
    const height = 100;
    const width = 100;
    const optionsBackground = {
      animation: "points",
      color: "#F5A623",
      duration: 0.1,
      height: height - 16,
      inkAmount: 3,
      points: 4,
      queue: true,
      root: ref.current,
      size: 16,
      width: width - 8
    };

    if (ref.current) {
      const bs = new Brushstroke(optionsBackground);
      if (props.isSelected) {
        bs.draw();
      } else {
        bs.clear();
      }
    }
  }, [props.isSelected]);

  const onClick = useCallback(() => {
    props.onClick(props.tag);
  }, []);

  return (
    <li ref={ref} className={`tag ${props.isSelected ? "tag--selected" : ""}`}>
      <label
        id={id}
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
