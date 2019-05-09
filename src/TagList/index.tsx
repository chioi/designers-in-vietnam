import React from "react";
import Tag, { ITag } from "../Tag";
import "./TagList.sass";

interface ITagsListProps {
  tags: ITag[];
  selectTag: (tag: ITag) => void;
  selectedTags: Map<string, ITag>;
}

const TagsList = (props: ITagsListProps) => {
  const tagWrappers = props.tags.map(tag => (
    <Tag
      key={tag.id}
      tag={tag}
      onClick={props.selectTag}
      isSelected={props.selectedTags.has(tag.name)}
    />
  ));
  return <ul className="tag-list horizontal-list">{tagWrappers}</ul>;
};

export default TagsList;
