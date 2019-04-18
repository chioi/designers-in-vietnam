import React, {useCallback, useState} from 'react';

export interface ITag {
  id?: string;
  name: string;
}

interface ITagProps {
  tag: ITag;
}

const Tag = (props: ITagProps) => {
  const [selected, saveSelected] = useState(false);
  const onClick = useCallback(() => {
    saveSelected(!selected);
  }, [selected]);

  return (
    <li className={`tag ${selected ? "tag--selected" : ""}`}>
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

export default Tag;
