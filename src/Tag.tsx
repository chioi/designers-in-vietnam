import React, { memo, useCallback, useEffect, useRef } from "react";
import Brushstroke from "./brushstroke";
import "./Tag.css";

export interface ITag {
  id?: string;
  name: string;
}

export interface ITagProps {
  tag: ITag;
  onClick: (tag: ITag) => void;
  isSelected: boolean;
}

const getBoundingRect = (id: string) => {
  const boundingRect = document.getElementById(id);
  let height = 100;
  let width = 100;
  if (boundingRect) {
    boundingRect.getBoundingClientRect();
    height = boundingRect.offsetHeight;
    width = boundingRect.offsetWidth;
  }

  return { width, height };
};

const Tag = (props: ITagProps) => {
  const id = `${props.tag.name}-tag`;
  const ref = useRef(null);
  const bs: any = useRef(null);

  useEffect(() => {
    const { width, height } = getBoundingRect(id);
    if (ref.current) {
      const optionsBackground = {
        animation: "points",
        color: "#F5A623",
        duration: 0.1,
        height,
        inkAmount: 3,
        padding: 8,
        points: 4,
        queue: true,
        root: ref.current,
        size: 10,
        width
      };

      bs.current = new Brushstroke(optionsBackground);
    }
  }, []);

  useEffect(() => {
    if (!bs.current) {
      bs.current = new Brushstroke();
    }

    if (props.isSelected) {
      const { width, height } = getBoundingRect(id);
      bs.current.clear();
      bs.current.draw();
      bs.current.draw({
        animation: "points",
        color: "#F5A623",
        duration: 0.1,
        points: [12, height / 2, width - 12, height / 2]
      });
    }
  }, [props.isSelected]);

  const onClick = useCallback(() => {
    props.onClick(props.tag);
  }, []);

  return (
    <li ref={ref} className={`tag${props.isSelected ? " tag--selected" : ""}`}>
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
